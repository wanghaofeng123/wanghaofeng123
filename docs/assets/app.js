const list = document.querySelector('#project-list');
const icon = '<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="3" y="7" width="19" height="18" rx="4" stroke="currentColor" stroke-width="1.5"/><path d="m22 13 7-4v14l-7-4" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 13h7M9 18h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
const element = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

function safeURL(value) {
  try {
    const url = new URL(value, document.baseURI);
    if (url.protocol === 'https:' || (url.protocol === 'http:' && url.origin === location.origin)) return url.href;
  } catch {}
  return null;
}

function externalLink(label, url, className) {
  const link = element('a', className, label);
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  return link;
}

function renderProject(project, index) {
  const article = element('article', 'project');
  article.id = project.id;
  const top = element('div', 'project-top');
  top.append(element('span', 'project-number', String(index + 1).padStart(2, '0')));
  const heading = element('div', 'project-heading');
  heading.append(element('p', 'category', project.category));
  const title = element('h3', '', project.title);
  title.append(element('span', '', project.subtitle));
  heading.append(title);
  top.append(heading);
  article.append(top);

  const layout = element('div', 'project-layout');
  const mediaColumn = element('div', 'media-column');
  const stage = element('div', 'media-stage');
  stage.setAttribute('aria-label', `${project.title} 演示区`);
  const caption = element('p', 'media-caption');
  caption.setAttribute('aria-live', 'polite');
  const error = element('p', 'media-error');
  error.hidden = true;
  error.setAttribute('role', 'status');
  const playlist = element('div', 'video-list');
  playlist.setAttribute('aria-label', `${project.title} 视频列表`);
  const videos = (project.videos || []).filter(video => video.title && ['file', 'embed', 'link'].includes(video.kind) && safeURL(video.src));

  if (!videos.length) {
    const empty = element('div', 'media-empty');
    const glyph = element('div', 'empty-glyph');
    glyph.innerHTML = icon;
    empty.append(glyph, element('strong', '', '演示视频即将上线'), element('p', '', '先从项目源码了解实现细节'));
    const meta = element('div', 'stage-meta');
    meta.append(element('span', '', 'PROJECT PREVIEW'), element('span', '', 'WANG HAOFENG'));
    empty.append(meta);
    stage.append(empty);
    caption.textContent = '项目代码已公开，演示视频整理中。';
  }

  function selectVideo(video, selectedIndex) {
    for (const player of stage.querySelectorAll('video')) player.pause();
    stage.replaceChildren();
    error.hidden = true;
    error.replaceChildren();
    caption.textContent = video.caption || video.title;
    const url = safeURL(video.src);
    let player;
    if (video.kind === 'file') {
      player = element('video');
      player.controls = true;
      player.playsInline = true;
      player.preload = 'metadata';
      player.src = url;
      player.setAttribute('aria-label', video.title);
      if (video.poster && safeURL(video.poster)) player.poster = safeURL(video.poster);
      player.addEventListener('error', () => {
        error.replaceChildren(document.createTextNode('视频暂时无法播放。'), externalLink('打开视频文件 ↗', url, ''));
        error.hidden = false;
      });
    } else if (video.kind === 'embed' && ['www.youtube-nocookie.com', 'www.youtube.com', 'player.bilibili.com'].includes(new URL(url).hostname)) {
      player = element('iframe');
      player.src = url;
      player.title = video.title;
      player.allow = 'fullscreen; picture-in-picture; encrypted-media';
      player.allowFullscreen = true;
      player.referrerPolicy = 'strict-origin-when-cross-origin';
    } else {
      player = element('div', 'media-link');
      const glyph = element('div', 'empty-glyph');
      glyph.innerHTML = icon;
      player.append(glyph, element('strong', '', video.title), externalLink('观看演示 ↗', url, 'external-video'));
    }
    stage.append(player);
    [...playlist.children].forEach((button, i) => button.setAttribute('aria-pressed', String(i === selectedIndex)));
  }

  videos.forEach((video, i) => {
    const button = element('button', 'video-tab', video.title);
    button.type = 'button';
    button.setAttribute('aria-pressed', 'false');
    if (video.duration) button.append(element('small', '', video.duration));
    button.addEventListener('click', () => selectVideo(video, i));
    playlist.append(button);
  });
  if (videos.length) selectVideo(videos[0], 0);
  mediaColumn.append(stage, caption, error);
  if (videos.length > 1) mediaColumn.append(playlist);

  const detail = element('div', 'project-detail');
  detail.append(element('p', 'project-description', project.description));
  const tags = element('div', 'tags');
  (project.tags || []).forEach(tag => tags.append(element('span', 'tag', tag)));
  detail.append(tags);
  const highlights = element('ul', 'highlights');
  (project.highlights || []).forEach(item => {
    const li = element('li');
    li.append(element('strong', '', item.title), element('span', '', item.text));
    highlights.append(li);
  });
  detail.append(highlights);
  if (project.source && safeURL(project.source)) {
    const source = externalLink('查看项目源码', safeURL(project.source), 'source-link');
    source.append(element('span', '', '↗'));
    detail.append(source);
  }
  layout.append(mediaColumn, detail);
  article.append(layout);
  return article;
}

try {
  const { projects } = await import('../projects.js');
  if (!Array.isArray(projects)) throw new Error('Invalid project list');
  projects.forEach((project, index) => list.append(renderProject(project, index)));
  document.querySelector('#project-count').textContent = `${String(projects.length).padStart(2, '0')} PROJECT${projects.length === 1 ? '' : 'S'}`;
} catch {
  document.querySelector('#load-error').hidden = false;
}

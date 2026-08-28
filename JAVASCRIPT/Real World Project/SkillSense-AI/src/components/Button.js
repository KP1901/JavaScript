export function Button(text, link) {
  return `
    <a href="${link}" class="btn">
      ${text}
    </a>
  `;
}

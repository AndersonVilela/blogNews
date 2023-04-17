import { marked } from "marked";

export default function transformHtml(body?: string): string {
  if (body) {
    return marked.parse(body);
  }
  return '';
}
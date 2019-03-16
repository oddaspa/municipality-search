import { helper } from '@ember/component/helper';

export function formatDate(date) {
  return (date.toLocaleString() + "").slice(0,-10);
}

export default helper(formatDate);

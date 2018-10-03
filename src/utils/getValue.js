import get from 'lodash/get'

/**
 * Get item value
 *
 * @param item
 * @param group
 * @param parameter
 * @returns {string|number|null}
 */
export default (item, group, parameter) => get(item, [group, parameter], null);

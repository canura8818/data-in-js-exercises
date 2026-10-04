import { htmlToElement } from "./html-utils.js";

// Get references to DOM elements
const loadingElement = document.getElementById("loading");
const dataInfoElement = document.getElementById("data-info");
const callCountElement = document.getElementById("call-count");
const callsListElement = document.getElementById("calls-list");

// ... Paste copied code here ...
/**
 * Format a date string to be more readable
 * @param {string} dateString - The date string from the API
 * @returns {string} Formatted date string
 */
function formatDate(dateString) {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return dateString; // Return original if parsing fails
  }
}

/**
 * Get CSS class for status styling
 * @param {string} status - The status from the API
 * @returns {string} CSS class name
 */
function getStatusClass(status) {
  const statusLower = status.toLowerCase();
  if (statusLower.includes('open')) return 'status-open';
  if (statusLower.includes('closed')) return 'status-closed';
  if (statusLower.includes('progress')) return 'status-in-progress';
  return 'status-open'; // default
}

/**
 * Create a list item element for a 311 call using template literals
 * @param {Object} call - The call data object
 * @returns {HTMLElement} The created list item element
 */
function createCallListItem(call) {
  // ... Your code here ...
  const serviceName = call.service_name;
  const address = call.address
  const requestDate = formatDate(call.requested_datetime);
  const status = call.status;
  const statusClass = getStatusClass(status);
  const html = `
    <li class="call-item">
      <span class="name">${serviceName}</span>
      <span class="call-address">${address}</span>
      <span class="date">${requestDate}</span>
      <span class="call-status">${statusClass}</span>
    </li>
  `;
  const listItem = htmlToElement(html);
  return listItem
}

/**
 * Display the 311 calls data in the list
 * @param {Array} calls - Array of call objects
 */
function displayCalls(calls) {
  // Clear the existing list
  callsListElement.innerHTML = ``;

  // Update the count
  callCountElement.textContent = calls.length;

  // Create and append list items for each call
  for (const call of calls) {
    const listItem = createCallListItem(call);
    callsListElement.appendChild(listItem);
  }

  // Hide loading, show data info
  loadingElement.classList.add('hidden');
  dataInfoElement.classList.remove('hidden');
}

export {
  displayCalls,
};
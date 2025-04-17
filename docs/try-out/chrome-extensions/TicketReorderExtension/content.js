// Function to reorder ticket sections
function reorderTicketSections() {
    // Select the elements
    const ticketHeader = document.querySelector('.ticket-header');

    ticketHeader.style.backgroundColor = 'pink';
    const ticketReplies = document.querySelector('.ticket-replies');
    const ticketReplyNew = document.querySelector('.ticket-reply-new');

    if (ticketHeader && ticketReplies && ticketReplyNew) {
        // Move the ticket-reply-new to the bottom of the ticket-replies section
        ticketReplies.appendChild(ticketReplyNew);

        // Create a container to hold the streamlined sections
        const streamlinedContainer = document.createElement('div');
        streamlinedContainer.id = 'ticket-streamlined';

        // Append the sections to the streamlined container
        streamlinedContainer.appendChild(ticketHeader);
        streamlinedContainer.appendChild(ticketReplies);

        // Insert the streamlined container before the ticket
        const originalTicket = document.querySelector('.ticket.ticket-detail');
        originalTicket.parentNode.insertBefore(streamlinedContainer, originalTicket);
    }
}

// Function to extract support person's full name and ticket number and insert them
function insertSupportPersonAndTicketNumber() {
    // Get the Support person's full name
    let supportPerson = '';
    const person = document.querySelector('[ng-if="ctrl.ticket.claimedBy.id"]');
    if (person) {
        supportPerson = person.textContent;
    }

    // Get the ticket number
    let ticketNumber = '';
    const breadcrumbContainer = document.querySelector('#sub-nav .BreadCrumbs:last-of-type ol > li.active > span');
    if (breadcrumbContainer) {
        const titleText = breadcrumbContainer.getAttribute('title');
        if (titleText) {
            const ticketNumberMatch = titleText.match(/Ticket #(\d+)/);
            if (ticketNumberMatch && ticketNumberMatch[1]) {
                ticketNumber = ticketNumberMatch[1];
            }
        }
    }

    // Create a new div element for the support person and ticket number
    const infoDiv = document.createElement('div');
    infoDiv.style.color = 'black';
    infoDiv.style.backgroundColor = 'pink';
    infoDiv.style.padding = '10px';
    infoDiv.style.marginBottom = '10px';
    infoDiv.textContent = `Support Person: ${supportPerson}, Ticket Number: ${ticketNumber}`;

    // Insert the new div before the original ticket
    const originalTicket = document.querySelector('#ticket-streamlined');
    originalTicket.parentNode.insertBefore(infoDiv, originalTicket);

    return ticketNumber;
}

// Function to copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.readText().then((clipboardContent) => {
        if (clipboardContent.trim().split(/\s+/).length === 2) {
            text = clipboardContent.trim() + '; ' + text;
        }

        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        alert('Ticket number copied to clipboard');
    }).catch(() => {
        // Handle any errors or fallback if clipboard API is not supported
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        alert('Ticket number copied to clipboard');
    });
}

// Function to create and add the "Get ticket number" button
function addButton(ticketNumber) {
    const button = document.createElement('button');
    button.textContent = 'Get ticket number';
    button.style.padding = '10px';
    button.style.marginBottom = '10px';
    button.style.backgroundColor = 'blue';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.cursor = 'pointer';

    button.addEventListener('click', () => {
        copyToClipboard(ticketNumber);
    });

    const originalTicket = document.querySelector('#ticket-streamlined');
    originalTicket.parentNode.insertBefore(button, originalTicket);
}

// Run the functions
reorderTicketSections();
const ticketNumber = insertSupportPersonAndTicketNumber();
addButton(ticketNumber);

function remove_flag() {
    // Select all <a> tags
    const links = document.querySelectorAll("a");

    // Loop through the links and remove those containing "Powered by Mintlify"
    links.forEach(link => {
        if (link.textContent.includes("Powered by Mintlify")) {
            link.remove();
        }
    });
    console.log("Flag removed");
}
remove_flag();

// Use MutationObserver to monitor DOM changes
// Use MutationObserver with optimized settings
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.addedNodes.length > 0) {
            remove_flag();
        }
    });
});

// Start observing the document body for child node changes
observer.observe(document.body, { childList: true, subtree: true });

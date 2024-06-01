/**
 * Modules.
 */
import video from "./modules/video.js";
import initCounters from "./modules/counter.js";
import tabs from "./modules/tabs.js";

// Init Modules
tabs();
video();
initCounters();

$(document).foundation();

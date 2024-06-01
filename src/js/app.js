/**
 * Modules.
 */
import video from "./modules/video.js";
import initCounters from "./modules/counter.js";
import tabs from "./modules/tabs.js";
import slider from "./modules/slider.js";

// Init Modules
tabs();
video();
slider();
initCounters();

$(document).foundation();

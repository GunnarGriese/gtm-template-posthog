const aliasInWindow = require('aliasInWindow');
const createQueue = require('createQueue');
const callInWindow = require('callInWindow');
const copyFromWindow = require('copyFromWindow');
const setInWindow = require('setInWindow');
const injectScript = require('injectScript');
const makeTableMap = require('makeTableMap');
const makeNumber = require('makeNumber');
const getType = require('getType');
//const copyFromDataLayer = require('copyFromDataLayer');
const math = require('Math');
const log = require('logToConsole');
const JSON = require('JSON');

// Helper methods
const fail = msg => {
    log('We fail!');
    log(msg);
    data.gtmOnFailure();
};

// Map event parameters
const mapEventData = dataTable => {
    return dataTable && dataTable.length ? makeTableMap(dataTable, 'name', 'value') : undefined;
};

// Map allowLists
const mapAllowListData = allowListTable => {
    return allowListTable && allowListTable.length ? makeTableMap(allowListTable, 'name', 'value') : undefined;
};

// Convert allowList strings to arrays
const convertAllowLists = allowListTable => {
    for (let key in allowListTable) {
        allowListTable[key] = allowListTable[key].split(',');
    }
    return allowListTable;
};

// Convert string 

// Tag type evaluation
if (data.tagType === 'init') {
    let configObj = {};
    // Endpoint config
    const apiHost = data.apiHost;
    const apiKey = data.apiKey;
    const postHogEndpoint = apiHost + "/static/array.js";
    configObj.apiHost = apiHost;
    log(JSON.stringify(configObj));
    // Basic Tracker config
    const autocapture_tuning = data.autocapture_tuning;
    const autocapture_off = data.autocapture_off;
    const capture_pageview = data.capture_pageview;
    const capture_pageleave = data.capture_pageleave;
    const cross_subdomain_cookie = data.cross_subdomain_cookie;
    const disable_persistence = data.disable_persistence;
    const disable_session_recording = data.disable_session_recording;
    const enable_recording_console_log = data.enable_recording_console_log;
    const mask_all_text = data.mask_all_text;
    // Assembling config object
    if (autocapture_tuning) {
        configObj.autocapture = convertAllowLists(mapAllowListData(data.autocaptureTuning));
    }
    if (autocapture_off) configObj.autocapture = false;
    if (!capture_pageview) configObj.capture_pageview = false;
    if (!capture_pageleave) configObj.capture_pageleave = false;
    if (!cross_subdomain_cookie) configObj.cross_subdomain_cookie = false;
    if (disable_persistence) configObj.disable_persistence = true;
    if (disable_session_recording) configObj.disable_session_recording = true;
    if (enable_recording_console_log) configObj.enable_recording_console_log = true;
    if (mask_all_text) configObj.mask_all_text = true;
    log(data.loaded);
    if (data.enable_loaded) configObj.loaded = data.loaded; //function() {log('hello world');};
    log(JSON.stringify(configObj));
    // Callback function after successful script request to PostHog
    const success = msg => {
        log('We succeed!');
        callInWindow('posthog.init', apiKey, configObj);
        data.gtmOnSuccess();
    };

    // Request the script and call init method once script is loaded
    injectScript(postHogEndpoint, success, fail, 'postHogSnippet');
} else if (data.tagType === 'event' || data.tagType === 'virtualPageView') {
    const eventName = data.customEventName;
    const eventParams = mapEventData(data.eventParameterList);
    const userPropsSet = mapEventData(data.userPropertiesSetList);
    const userPropsSetOnce = mapEventData(data.userPropertiesSetOnceList);
    let eventData = {};
    if (eventParams) eventData = eventParams;
    if (userPropsSet) eventData['$set'] = userPropsSet;
    if (userPropsSetOnce) eventData['$set_once'] = userPropsSetOnce;
    if (data.tagType === 'event' && JSON.stringify(eventData) !== '{}') {
        callInWindow('posthog.capture', eventName, eventData);
    } else if (data.tagType === 'event') {
        callInWindow('posthog.capture', eventName);
    } else if (data.tagType === 'virtualPageView' && JSON.stringify(eventData) !== '{}') {
        callInWindow('posthog.capture', '$pageview', eventData);
    } else if (data.tagType === 'virtualPageView') {
        callInWindow('posthog.capture', '$pageview');
    }
} else if (data.tagType === 'identify') {
    const userPropsSet = mapEventData(data.userPropertiesSetList);
    const userPropsSetOnce = mapEventData(data.userPropertiesSetOnceList);
    if (userPropsSet && userPropsSetOnce) {
        callInWindow('posthog.identify', data.userId, userPropsSet, userPropsSetOnce);
    } else if (userPropsSet) {
        callInWindow('posthog.identify', data.userId, userPropsSet);
    } else if (userPropsSetOnce) {
        callInWindow('posthog.identify', data.userId, {}, userPropsSetOnce);
    } else {
        callInWindow('posthog.identify', data.userId);
    }
} else if (data.tagType === 'alias') {
    callInWindow('posthog.alias', data.aliasdistinctId, data.aliasId);
} else if (data.tagType === 'reset') {
    if (data.resetDeviceId) {
        callInWindow('posthog.reset', true);
    } else {
        callInWindow('posthog.reset');
    }
} else if (data.tagType === 'peopleSet') {
    const peopleSet = mapEventData(data.peopleSetList);
    callInWindow('posthog.people.set', peopleSet);
} else if (data.tagType === 'register' || data.tagType === 'registerOnce') {
    const registerParams = mapEventData(data.registerList);
    if (data.tagType === 'register') {
        callInWindow('posthog.register', registerParams);
    } else {
        callInWindow('posthog.register_once', registerParams);
    }
} else if (data.tagType === 'unregister') {
    const unregisterProp = data.unregisterProp;
    callInWindow('posthog.unregister', unregisterProp);
} else {
    log('Invalid tag type - Please select a valid tag type.');
}

/*
const initPostHog = (apiHost, apiKey) => {
    // Return the existing 'posthog' object if available
    let posthog = copyFromWindow('posthog');
    if (posthog) {
        return posthog;
    }
    // If 'posthog' object not available, initialize it
    log('init posthog');
    setInWindow('posthog', []);
    setInWindow('posthog.__SV', 1);
    //let posthog = copyFromWindow('posthog');
    const posthogQueue = createQueue('posthog._i');
    posthogQueue([apiKey, {
        'api_host': apiHost,
        'autocapture': {
            'event_allowlist': ['click', 'change', 'submit'], // DOM events from this list ['click', 'change', 'submit']
            //'url_allowlist': ['posthog.com\.\/docs\/.*'], // strings or RegExps
            'element_allowlist': ['a', 'button', 'form', 'input', 'select', 'textarea', 'label'], // DOM elements from this list ['a', 'button', 'form', 'input', 'select', 'textarea', 'label']
            //'css_selector_allowlist': ['[ph-autocapture]'] // List of CSS selectors
        }
    }]);
    return copyFromWindow('posthog');

};
//const posthog = initPostHog(apiHost, apiKey);
*/
data.gtmOnSuccess();
# PostHog GTM Tag Template (v0.0.1)

This is a Google Tag Manager (GTM) tag template for [PostHog](https://posthog.com/), an open-source product analytics platform that helps you understand user behavior on your website or app. This template allows you to integrate PostHog tracking into your GTM container and manage events, user properties, and configuration settings.

## Features

- Initialize PostHog with various configuration options (e.g., autocapture and more)
- Capture events and virtual pageviews with custom properties
- Identify users
- Create aliases between user IDs
- Reset user IDs and device IDs
- Set user properties
- Persist event parameters across a session (super properties)
- Remove stored super properties

## Setup

To use this tag template in your GTM container, follow these steps:

1. Download the template [here](PostHog.tpl)
2. In your GTM workspace, click on "Templates" in the left sidebar.
3. Click on "New" in the Tag Templates section.
4. Click on the "Import" button and upload the .tpl in this repo.
5. Save the template and add a new tag using the imported PostHog GTM Tag Template.

## Usage

After importing the template, you can create new tags using this template and configure them based on your needs. The available configuration options are described below.

### Tag Types

- `init`: Initialize the [PostHog tracking library](https://posthog.com/docs/libraries/js#add-to-your-website--app).
- `event`: Capture a [custom event](https://posthog.com/docs/libraries/js#send-custom-events-with-posthogcapture) with custom properties.
- `virtualPageView`: Capture a [virtual pageview](https://posthog.com/docs/libraries/js#one-page-apps-and-page-views) with custom properties (for SPAs).
- `identify`: [Identify](https://posthog.com/docs/libraries/js#identifying-users) a user with user properties.
- `alias`: Create an [alias](https://posthog.com/docs/libraries/js#multiple-ids) between two user IDs.
- `reset`: [Reset](https://posthog.com/docs/libraries/js#reset-after-logout) the user ID and, optionally, the device ID.
- `peopleSet`: [Set user properties](https://posthog.com/docs/libraries/js#sending-user-information) for a user.
- `register`: [Persist event parameters](https://posthog.com/docs/libraries/js#super-properties) across a session (super properties).
- `registerOnce`: Persist event parameters only once.
- `unregister`: [Remove](https://posthog.com/docs/libraries/js#removing-stored-super-properties) a stored super property.

### Configuration options for `init` tag type

See detailed documentation for each of the configuration options [here](https://posthog.com/docs/libraries/js#config). The configuration options represented in the tag template are:

#### Basic tracker configuration

- `apiHost`: The domain of your PostHog instance (e.g., 'https://app.posthog.com'). The tag will append "/static/array.js" to this value to build the actual request URL.
- `apiKey`: Your PostHog project API key.
- `autocapture_tuning`: Custom allowlist settings for autocapture (s. PostHog docs [here](https://posthog.com/docs/libraries/js#autocapture)).
- `autocapture_off`: Disable autocapture completely (s. PostHog docs [here](https://posthog.com/docs/libraries/js#autocapture)).
- `capture_pageview`: Enable/disable capturing pageviews.
- `capture_pageleave`: Enable/disable capturing page leave events.
- `cross_subdomain_cookie`: Enable/disable cross-subdomain cookie tracking.
- `disable_persistence`: Enable/disable cookie/localStorage persistence.
- `disable_session_recording`: Enable/disable session recording.
- `enable_recording_console_log`: Enable/disable console log recording.
- `mask_all_text`: Enable/disable masking all text.

#### Advanced tracker configuration

- `loaded`: A function to be called when the PostHog library has loaded.
- more to come...

The PostHog library can be initiated with a callback function (e.g., call `identify`) that is called when the library has loaded.
For the callback function to work, you need to reference a custom JS variable in the field `loaded`. The variable needs to return a function like so:

![loaded function](/img/posthog-loaded-callback.png)

### Additional options for other tag types

- `customEventName`: Name of the custom event (for `event` tag type).
- `eventParameterList`: List of custom properties for events and virtual pageviews.
- `userPropertiesSetList`: List of user properties to be set for `identify` or [`event`](https://posthog.com/docs/libraries/js#set) tag type.
- `userPropertiesSetOnceList`: List of user properties to be set once for `identify` and [`event`](https://posthog.com/docs/libraries/js#set_once) tag type.
- `userId`: User ID for `identify` and `alias` tag types.
- `aliasdistinctId`: Alias distinct ID for `alias` tag type.
- `aliasId`: Alias ID for `alias` tag type.
- `resetDeviceId`: Reset the device ID for `reset` tag type.

## Troubleshooting

If you encounter any issues, please check the browser console for error messages. The template uses `logToConsole` to provide debug information and error messages. If you need further assistance or have feature requests, please create an issue in this repo.

## License

This template is released under the [MIT License](https://opensource.org/licenses/MIT).

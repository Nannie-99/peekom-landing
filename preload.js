const { contextBridge, ipcRenderer } = require("electron");

let markedExport = null;
try {
  const markedModule = require("marked");
  markedExport = markedModule.marked || markedModule;
} catch {
  markedExport = null;
}

const ALLOWED_INVOKE = new Set([
  "shared-state:get",
  "shared-state:set",
  "memo:flush",
  "settings:update",
  "settings:notify-applied",
  "settings:notify-changed",
  "settings:open-window",
  "settings:close-window",
  "settings:get",
  "window:sync-interaction",
  "window:set-peek-auto-collapse",
  "window:set-panel-expanded",
  "window:set-target-display",
  "window:drag-end",
  "window:nudge-y",
  "shell:open-external",
  "export:save",
  "import:load",
  "image:pick",
  "image:file-exists",
  "image:read-file",
  "system:list-fonts",
  "display:list",
  "tray:set-visible",
  "startup:get",
  "startup:set",
  "premium:get",
  "branding:get",
  "premium:activate",
  "premium:open-buy",
  "premium:finalize-upgrade",
  "color:restore-advanced-picker",
  "color:prepare-advanced-picker"
]);

const ALLOWED_SEND = new Set([]);

const ALLOWED_ON = new Set([
  "shared-state:read-request",
  "shared-state:write-request",
  "settings:applied",
  "settings:partial-sync",
  "state:changed",
  "state:partial-changed",
  "settings:request-close",
  "shortcut:toggle-expand",
  "shortcut:slot-prev",
  "shortcut:slot-next",
  "tray:add-index",
  "premium:changed",
  "premium:show-modal",
  "startup:synced",
  "peek:auto-collapse-poll",
  "settings:window-state"
]);

const REPLY_CHANNEL_PREFIXES = [
  "shared-state:read-response:",
  "shared-state:write-response:"
];

function assertAllowed(set, channel) {
  if (!set.has(channel)) {
    throw new Error(`IPC channel not allowed: ${channel}`);
  }
}

function assertSendAllowed(channel) {
  if (ALLOWED_SEND.has(channel)) return;
  if (REPLY_CHANNEL_PREFIXES.some((prefix) => channel.startsWith(prefix))) return;
  throw new Error(`IPC send channel not allowed: ${channel}`);
}

contextBridge.exposeInMainWorld("peekom", {
  invoke(channel, ...args) {
    assertAllowed(ALLOWED_INVOKE, channel);
    return ipcRenderer.invoke(channel, ...args);
  },
  send(channel, ...args) {
    assertSendAllowed(channel);
    ipcRenderer.send(channel, ...args);
  },
  sendSync(channel, ...args) {
    assertSendAllowed(channel);
    return ipcRenderer.sendSync(channel, ...args);
  },
  on(channel, listener) {
    assertAllowed(ALLOWED_ON, channel);
    const wrapped = (_event, ...payload) => listener(...payload);
    ipcRenderer.on(channel, wrapped);
    return () => ipcRenderer.removeListener(channel, wrapped);
  },
  marked: markedExport
});

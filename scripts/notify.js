const vscode = require('vscode');
const fqen = "NevexoJack-JB.ecksclone"
const messages = require("./messages.json")

const message_broker = (state_version, installed_version) => {
    if (state_version === undefined) {
        // Fresh installation
        if (messages['new_install'] != undefined) {
            vscode.window.showInformationMessage(messages['new_install'])
            return;
        }
    }

    if (state_version != installed_version) {
        // Upgraded (or new)

        // Check for a version number specific message
        if (messages[installed_version] != undefined) {
            vscode.window.showInformationMessage(messages[installed_version])
            return;
        }

        // Check for non-specific update message
        if (messages['updated'] != undefined) {
            vscode.window.showInformationMessage(messages["updated"])
            return;
        }
    }
}

const activate = (context) => {
    // Get extension information
    const extension = vscode.extensions.getExtension(fqen);
    const installed_version = extension.packageJSON.version;
    const state_version = context.globalState.get("ecksCloneVersion")
    console.log(`Installed: ${installed_version}, state: ${state_version}`)

    // Call the message broker
    // TODO: There's likely a better way to handle this, but I'm rather lazy.
    message_broker(state_version, installed_version)
    
    // Update the globalState version
    context.globalState.update("ecksCloneVersion", installed_version)
}

exports.activate = activate;
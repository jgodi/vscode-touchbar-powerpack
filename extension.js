const vscode = require('vscode');

function activate() {
  vscode.commands.registerCommand('touchbar-powerback.closeall', function() {
    vscode.commands.executeCommand('workbench.action.closeAllEditors');
  });
  vscode.commands.registerCommand('touchbar-powerback.collapseall', function() {
    vscode.commands.executeCommand(
      'workbench.files.action.collapseExplorerFolders',
    );
  });
  vscode.commands.registerCommand('touchbar-powerback.rename', function() {
    vscode.commands.executeCommand('editor.action.rename');
  });
}

function deactivate() {}

exports.activate = activate;
exports.deactivate = deactivate;

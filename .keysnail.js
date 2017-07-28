// ========================== KeySnail Init File =========================== //

// You can preserve your code in this area when generating the init file using GUI.
// Put all your code except special key, set*key, hook, blacklist.
// ========================================================================= //
//{{%PRESERVE%
// Put your codes here
//}}%PRESERVE%
// ========================================================================= //

// ========================= Special key settings ========================== //

key.quitKey              = "C-g";
key.helpKey              = "<f1>";
key.escapeKey            = "C-q";
key.macroStartKey        = "<f3>";
key.macroEndKey          = "<f4>";
key.suspendKey           = "<f2>";
key.universalArgumentKey = "C-u";
key.negativeArgument1Key = "C--";
key.negativeArgument2Key = "C-M--";
key.negativeArgument3Key = "M--";

// ================================= Hooks ================================= //

hook.addToHook('KeyBoardQuit', function (aEvent) {
         if (key.currentKeySequence.length)
             return;

         command.closeFindBar();

         let marked = command.marked(aEvent);

         if (util.isCaretEnabled())
         {
             if (marked)
             {
                 command.resetMark(aEvent);
             }
             else
             {
                 if ("blur" in aEvent.target) aEvent.target.blur();

                 gBrowser.focus();
                 _content.focus();
             }
         }
         else
         {
             goDoCommand("cmd_selectNone");
         }

         if (KeySnail.windowType === "navigator:browser" && !marked)
         {
             key.generateKey(aEvent.originalTarget, KeyEvent.DOM_VK_ESCAPE, true);
         }
     });

// ============================= Key bindings ============================== //

key.setGlobalKey('C-M-r', function (ev) {
                userscript.reload();
            }, 'Reload the initialization file', true);

key.setGlobalKey('M-x', function (ev, arg) {
                ext.select(arg, ev);
            }, 'List exts and execute selected one', true);

key.setGlobalKey('M-:', function (ev) {
                command.interpreter();
            }, 'Command interpreter', true);

key.setGlobalKey(["<f1>", "b"], function (ev) {
                key.listKeyBindings();
            }, 'List all keybindings', false);

key.setGlobalKey('C-m', function (ev) {
                key.generateKey(ev.originalTarget, KeyEvent.DOM_VK_RETURN, true);
            }, 'Generate the return key code', false);

key.setGlobalKey(["<f1>", "F"], function (ev) {
                openHelpLink("firefox-help");
            }, 'Display Firefox help', false);

key.setGlobalKey(["C-x", "l"], function (ev) {
                command.focusToById("urlbar");
            }, 'Focus to the location bar', true);

key.setGlobalKey(["C-x", "g"], function (ev) {
                command.focusToById("searchbar");
            }, 'Focus to the search bar', true);

key.setGlobalKey(["C-x", "t"], function (ev) {
                command.focusElement(command.elementsRetrieverTextarea, 0);
            }, 'Focus to the first textarea', true);

key.setGlobalKey(["C-x", "s"], function (ev) {
                command.focusElement(command.elementsRetrieverButton, 0);
            }, 'Focus to the first button', true);

key.setGlobalKey('M-w', function (ev) {
                command.copyRegion(ev);
            }, 'Copy selected text', true);

key.setGlobalKey('C-s', function (ev) {
                command.iSearchForwardKs(ev);
            }, 'Emacs like incremental search forward', true);

key.setGlobalKey('C-r', function (ev) {
                command.iSearchBackwardKs(ev);
            }, 'Emacs like incremental search backward', true);

key.setGlobalKey(["C-x", "k"], function (ev) {
                BrowserCloseTabOrWindow();
            }, 'Close tab / window', false);

key.setGlobalKey(["C-x", "K"], function (ev) {
                closeWindow(true);
            }, 'Close the window', false);

key.setGlobalKey(["C-c", "u"], function (ev) {
                undoCloseTab();
            }, 'Undo closed tab', false);

key.setGlobalKey(["C-x", "n"], function (ev) {
                OpenBrowserWindow();
            }, 'Open new window', false);

key.setGlobalKey('C-M-l', function (ev) {
                getBrowser().mTabContainer.advanceSelectedTab(1, true);
            }, 'Select next tab', false);

key.setGlobalKey('C-M-h', function (ev) {
                getBrowser().mTabContainer.advanceSelectedTab(-1, true);
            }, 'Select previous tab', false);

key.setGlobalKey(["C-x", "C-c"], function (ev) {
                goQuitApplication();
            }, 'Exit Firefox', true);

key.setGlobalKey(["C-x", "o"], function (ev, arg) {
                command.focusOtherFrame(arg);
            }, 'Select next frame', false);

key.setGlobalKey(["C-x", "1"], function (ev) {
                window.loadURI(ev.target.ownerDocument.location.href);
            }, 'Show current frame only', true);

key.setGlobalKey(["C-x", "C-f"], function (ev) {
                BrowserOpenFileWindow();
            }, 'Open the local file', true);

key.setGlobalKey(["C-x", "C-s"], function (ev) {
                saveDocument(window.content.document);
            }, 'Save current page to the file', true);

key.setGlobalKey(["C-c", "C-c", "C-v"], function (ev) {
                toJavaScriptConsole();
            }, 'Display JavaScript console', true);

key.setGlobalKey(["C-c", "C-c", "C-c"], function (ev) {
                command.clearConsole();
            }, 'Clear Javascript console', true);

key.setEditKey(["C-x", "h"], function (ev) {
                command.selectAll(ev);
            }, 'Select whole text', true);

key.setEditKey([["C-SPC"], ["C-@"]], function (ev) {
                command.setMark(ev);
            }, 'Set the mark', true);

key.setEditKey('C-o', function (ev) {
                command.openLine(ev);
            }, 'Open line', false);

key.setEditKey([["C-x", "u"], ["C-_"]], function (ev) {
                display.echoStatusBar("Undo!", 2000);
                goDoCommand("cmd_undo");
            }, 'Undo', false);

key.setEditKey('C-\\', function (ev) {
                display.echoStatusBar("Redo!", 2000);
                goDoCommand("cmd_redo");
            }, 'Redo', false);

key.setEditKey('C-a', function (ev) {
                command.beginLine(ev);
            }, 'Beginning of the line', false);

key.setEditKey('C-e', function (ev) {
                command.endLine(ev);
            }, 'End of the line', false);

key.setEditKey('C-f', function (ev) {
                command.nextChar(ev);
            }, 'Forward char', false);

key.setEditKey('C-b', function (ev) {
                command.previousChar(ev);
            }, 'Backward char', false);

key.setEditKey('M-f', function (ev) {
                command.forwardWord(ev);
            }, 'Next word', false);

key.setEditKey('M-b', function (ev) {
                command.backwardWord(ev);
            }, 'Previous word', false);

key.setEditKey('C-n', function (ev) {
                command.nextLine(ev);
            }, 'Next line', false);

key.setEditKey('C-p', function (ev) {
                command.previousLine(ev);
            }, 'Previous line', false);

key.setEditKey('C-v', function (ev) {
                command.pageDown(ev);
            }, 'Page down', false);

key.setEditKey('M-v', function (ev) {
                command.pageUp(ev);
            }, 'Page up', false);

key.setEditKey('M-<', function (ev) {
                command.moveTop(ev);
            }, 'Beginning of the text area', false);

key.setEditKey('M->', function (ev) {
                command.moveBottom(ev);
            }, 'End of the text area', false);

key.setEditKey('C-d', function (ev) {
                goDoCommand("cmd_deleteCharForward");
            }, 'Delete forward char', false);

key.setEditKey('C-h', function (ev) {
                goDoCommand("cmd_deleteCharBackward");
            }, 'Delete backward char', false);

key.setEditKey('M-d', function (ev) {
                command.deleteForwardWord(ev);
            }, 'Delete forward word', false);

key.setEditKey([["C-<backspace>"], ["M-<delete>"]], function (ev) {
                command.deleteBackwardWord(ev);
            }, 'Delete backward word', false);

key.setEditKey('M-u', function (ev, arg) {
                command.wordCommand(ev, arg, command.upcaseForwardWord, command.upcaseBackwardWord);
            }, 'Convert following word to upper case', false);

key.setEditKey('M-l', function (ev, arg) {
                command.wordCommand(ev, arg, command.downcaseForwardWord, command.downcaseBackwardWord);
            }, 'Convert following word to lower case', false);

key.setEditKey('M-c', function (ev, arg) {
                command.wordCommand(ev, arg, command.capitalizeForwardWord, command.capitalizeBackwardWord);
            }, 'Capitalize the following word', false);

key.setEditKey('C-k', function (ev) {
                command.killLine(ev);
            }, 'Kill the rest of the line', false);

key.setEditKey('C-y', command.yank, 'Paste (Yank)', false);

key.setEditKey('C-M-y', command.yankPop, 'Paste pop (Yank pop)', true);

key.setEditKey('M-y', function (ev) {
                if (!command.kill.ring.length)
                    return;

                let ct = command.getClipboardText();
                if (!command.kill.ring.length || ct != command.kill.ring[0]) {
                    command.pushKillRing(ct);
                }

                prompt.selector(
                    {
                        message: "Paste:",
                        collection: command.kill.ring,
                        callback: function (i) { if (i >= 0) key.insertText(command.kill.ring[i]); }
                    }
                );
            }, 'Show kill-ring and select text to paste', true);

key.setEditKey('C-w', function (ev) {
                goDoCommand("cmd_copy");
                goDoCommand("cmd_delete");
                command.resetMark(ev);
            }, 'Cut current region', true);

key.setEditKey(["C-x", "r", "d"], function (ev, arg) {
                command.replaceRectangle(ev.originalTarget, "", false, !arg);
            }, 'Delete text in the region-rectangle', true);

key.setEditKey(["C-x", "r", "t"], function (ev) {
                prompt.read("String rectangle: ", function (aStr, aInput) {
                                command.replaceRectangle(aInput, aStr);
                            },
                            ev.originalTarget);
            }, 'Replace text in the region-rectangle with user inputted string', true);

key.setEditKey(["C-x", "r", "o"], function (ev) {
                command.openRectangle(ev.originalTarget);
            }, 'Blank out the region-rectangle, shifting text right', true);

key.setEditKey(["C-x", "r", "k"], function (ev, arg) {
                command.kill.buffer = command.killRectangle(ev.originalTarget, !arg);
            }, 'Delete the region-rectangle and save it as the last killed one', true);

key.setEditKey(["C-x", "r", "y"], function (ev) {
                command.yankRectangle(ev.originalTarget, command.kill.buffer);
            }, 'Yank the last killed rectangle with upper left corner at point', true);

key.setEditKey('M-n', function (ev) {
                command.walkInputElement(command.elementsRetrieverTextarea, true, true);
            }, 'Focus to the next text area', false);

key.setEditKey('M-p', function (ev) {
                command.walkInputElement(command.elementsRetrieverTextarea, false, true);
            }, 'Focus to the previous text area', false);

key.setViewKey([["C-n"], ["j"]], function (ev) {
                key.generateKey(ev.originalTarget, KeyEvent.DOM_VK_DOWN, true);
            }, 'Scroll line down', false);

key.setViewKey([["C-p"], ["k"]], function (ev) {
                key.generateKey(ev.originalTarget, KeyEvent.DOM_VK_UP, true);
            }, 'Scroll line up', false);

key.setViewKey([["C-f"], ["."]], function (ev) {
                key.generateKey(ev.originalTarget, KeyEvent.DOM_VK_RIGHT, true);
            }, 'Scroll right', false);

key.setViewKey([["C-b"], [","]], function (ev) {
                key.generateKey(ev.originalTarget, KeyEvent.DOM_VK_LEFT, true);
            }, 'Scroll left', false);

key.setViewKey([["M-v"], ["b"]], function (ev) {
                goDoCommand("cmd_scrollPageUp");
            }, 'Scroll page up', false);

key.setViewKey('C-v', function (ev) {
                goDoCommand("cmd_scrollPageDown");
            }, 'Scroll page down', false);

key.setViewKey([["M-<"], ["g"]], function (ev) {
                goDoCommand("cmd_scrollTop");
            }, 'Scroll to the top of the page', true);

key.setViewKey([["M->"], ["G"]], function (ev) {
                goDoCommand("cmd_scrollBottom");
            }, 'Scroll to the bottom of the page', true);

key.setViewKey('l', function (ev) {
                getBrowser().mTabContainer.advanceSelectedTab(1, true);
            }, 'Select next tab', false);

key.setViewKey('h', function (ev) {
                getBrowser().mTabContainer.advanceSelectedTab(-1, true);
            }, 'Select previous tab', false);

key.setViewKey(':', function (ev, arg) {
                shell.input(null, arg);
            }, 'List and execute commands', true);

key.setViewKey('R', function (ev) {
                BrowserReload();
            }, 'Reload the page', true);

key.setViewKey('B', function (ev) {
                BrowserBack();
            }, 'Back', false);

key.setViewKey('F', function (ev) {
                BrowserForward();
            }, 'Forward', false);

key.setViewKey(["C-x", "h"], function (ev) {
                goDoCommand("cmd_selectAll");
            }, 'Select all', true);

key.setViewKey('f', function (ev) {
                command.focusElement(command.elementsRetrieverTextarea, 0);
            }, 'Focus to the first textarea', true);

key.setViewKey('M-p', function (ev) {
                command.walkInputElement(command.elementsRetrieverButton, true, true);
            }, 'Focus to the next button', false);

key.setViewKey('M-n', function (ev) {
                command.walkInputElement(command.elementsRetrieverButton, false, true);
            }, 'Focus to the previous button', false);

key.setCaretKey([["C-a"], ["^"]], function (ev) {
                ev.target.ksMarked ? goDoCommand("cmd_selectBeginLine") : goDoCommand("cmd_beginLine");
            }, 'Move caret to the beginning of the line', false);

key.setCaretKey([["C-e"], ["$"]], function (ev) {
                ev.target.ksMarked ? goDoCommand("cmd_selectEndLine") : goDoCommand("cmd_endLine");
            }, 'Move caret to the end of the line', false);

key.setCaretKey([["C-n"], ["j"]], function (ev) {
                ev.target.ksMarked ? goDoCommand("cmd_selectLineNext") : goDoCommand("cmd_scrollLineDown");
            }, 'Move caret to the next line', false);

key.setCaretKey([["C-p"], ["k"]], function (ev) {
                ev.target.ksMarked ? goDoCommand("cmd_selectLinePrevious") : goDoCommand("cmd_scrollLineUp");
            }, 'Move caret to the previous line', false);

key.setCaretKey([["C-f"], ["l"]], function (ev) {
                ev.target.ksMarked ? goDoCommand("cmd_selectCharNext") : goDoCommand("cmd_scrollRight");
            }, 'Move caret to the right', false);

key.setCaretKey([["C-b"], ["h"], ["C-h"]], function (ev) {
                ev.target.ksMarked ? goDoCommand("cmd_selectCharPrevious") : goDoCommand("cmd_scrollLeft");
            }, 'Move caret to the left', false);

key.setCaretKey([["M-f"], ["w"]], function (ev) {
                ev.target.ksMarked ? goDoCommand("cmd_selectWordNext") : goDoCommand("cmd_wordNext");
            }, 'Move caret to the right by word', false);

key.setCaretKey([["M-b"], ["W"]], function (ev) {
                ev.target.ksMarked ? goDoCommand("cmd_selectWordPrevious") : goDoCommand("cmd_wordPrevious");
            }, 'Move caret to the left by word', false);

key.setCaretKey([["C-v"], ["SPC"]], function (ev) {
                ev.target.ksMarked ? goDoCommand("cmd_selectPageNext") : goDoCommand("cmd_movePageDown");
            }, 'Move caret down by page', false);

key.setCaretKey([["M-v"], ["b"]], function (ev) {
                ev.target.ksMarked ? goDoCommand("cmd_selectPagePrevious") : goDoCommand("cmd_movePageUp");
            }, 'Move caret up by page', false);

key.setCaretKey([["M-<"], ["g"]], function (ev) {
                ev.target.ksMarked ? goDoCommand("cmd_selectTop") : goDoCommand("cmd_scrollTop");
            }, 'Move caret to the top of the page', false);

key.setCaretKey([["M->"], ["G"]], function (ev) {
                ev.target.ksMarked ? goDoCommand("cmd_selectEndLine") : goDoCommand("cmd_endLine");
            }, 'Move caret to the end of the line', false);

key.setCaretKey('J', function (ev) {
                util.getSelectionController().scrollLine(true);
            }, 'Scroll line down', false);

key.setCaretKey('K', function (ev) {
                util.getSelectionController().scrollLine(false);
            }, 'Scroll line up', false);

key.setCaretKey(',', function (ev) {
                util.getSelectionController().scrollHorizontal(true);
                goDoCommand("cmd_scrollLeft");
            }, 'Scroll left', false);

key.setCaretKey('.', function (ev) {
                goDoCommand("cmd_scrollRight");
                    util.getSelectionController().scrollHorizontal(false);
            }, 'Scroll right', false);

key.setCaretKey('z', function (ev) {
                command.recenter(ev);
            }, 'Scroll to the cursor position', false);

key.setCaretKey([["C-SPC"], ["C-@"]], function (ev) {
                command.setMark(ev);
            }, 'Set the mark', true);

key.setCaretKey(':', function (ev, arg) {
                shell.input(null, arg);
            }, 'List and execute commands', true);

key.setCaretKey('R', function (ev) {
                BrowserReload();
            }, 'Reload the page', true);

key.setCaretKey('B', function (ev) {
                BrowserBack();
            }, 'Back', false);

key.setCaretKey('F', function (ev) {
                BrowserForward();
            }, 'Forward', false);

key.setCaretKey(["C-x", "h"], function (ev) {
                goDoCommand("cmd_selectAll");
            }, 'Select all', true);

key.setCaretKey('f', function (ev) {
                command.focusElement(command.elementsRetrieverTextarea, 0);
            }, 'Focus to the first textarea', true);

key.setCaretKey('M-p', function (ev) {
                command.walkInputElement(command.elementsRetrieverButton, true, true);
            }, 'Focus to the next button', false);

key.setCaretKey('M-n', function (ev) {
                command.walkInputElement(command.elementsRetrieverButton, false, true);
            }, 'Focus to the previous button', false);

/* caret mode */
// http://aki2o.hatenablog.jp/entry/2013/08/02/KeySnail%E5%B0%8E%E5%85%A5%E3%81%A7%E3%81%A4%E3%81%BE%E3%81%A5%E3%81%84%E3%81%9F%E4%BA%8B
util.setBoolPref("accessibility.browsewithcaret", false);
hook.addToHook('KeyBoardQuit', function (aEvent) {
    if (key.currentKeySequence.length) {
        return;
    }
    command.closeFindBar();
    var marked = command.marked(aEvent);
    if (util.isCaretEnabled()) {
        if (marked) {
            command.resetMark(aEvent);
        } else {
            if ("blur" in aEvent.target) {
                aEvent.target.blur();
            }
            util.setBoolPref("accessibility.browsewithcaret", false);
            gBrowser.focus();
            _content.focus();
        }
    } else {
        goDoCommand("cmd_selectNone");
    }
    if (KeySnail.windowType === "navigator:browser" && !marked) {
        key.generateKey(aEvent.originalTarget, KeyEvent.DOM_VK_ESCAPE, true);
    }
});

key.setCaretKey("l", function (ev) { ev.target.ksMarked ? goDoCommand("cmd_selectCharNext") : command.nextChar(ev); }, 'キャレットを一文字右へ移動', false);
key.setCaretKey("h", function (ev) { ev.target.ksMarked ? goDoCommand("cmd_selectCharPrevious") : command.previousChar(ev); }, 'キャレットを一文字左へ移動', false);
key.setCaretKey("L", function (ev) { ev.target.ksMarked ? goDoCommand("cmd_selectWordNext") : command.forwardWord(ev); }, 'キャレットを一単語右へ移動', false);
key.setCaretKey("H", function (ev) { ev.target.ksMarked ? goDoCommand("cmd_selectWordPrevious") : command.backwardWord(ev); }, 'キャレットを一単語左へ移動', false);
key.setCaretKey("j", function (ev) { ev.target.ksMarked ? goDoCommand("cmd_selectLineNext") : command.nextLine(ev); }, 'キャレットを一行下へ', false);
key.setCaretKey("k", function (ev) { ev.target.ksMarked ? goDoCommand("cmd_selectLinePrevious") : command.previousLine(ev); }, 'キャレットを一行上へ', false);
key.setCaretKey("SPC", function (ev) { ev.target.ksMarked ? goDoCommand("cmd_selectPageNext") : command.pageDown(ev); }, 'キャレットを一画面分下へ', false);
key.setCaretKey("b", function (ev) { ev.target.ksMarked ? goDoCommand("cmd_selectPagePrevious") : command.pageUp(ev); }, 'キャレットを一画面分上へ', false);
key.setCaretKey("^", function (ev) { ev.target.ksMarked ? goDoCommand("cmd_selectBeginLine") : command.beginLine(ev); }, 'キャレットを行頭へ移動', false);
key.setCaretKey("$", function (ev) { ev.target.ksMarked ? goDoCommand("cmd_selectEndLine") : command.endLine(ev); }, 'キャレットを行末へ移動', false);
key.setCaretKey("g", function (ev) { ev.target.ksMarked ? goDoCommand("cmd_selectTop") : command.moveTop(ev); }, 'キャレットをページ先頭へ移動', false);
key.setCaretKey("G", function (ev) { ev.target.ksMarked ? goDoCommand("cmd_selectBottom") : command.moveBottom(ev); }, 'キャレットをページ末尾へ移動', false);




/* caret hint */
key.setCaretKey('s', function (ev, arg) {
    ext.exec("swap-caret", arg, ev);
}, 'キャレットを交換', true);

key.setViewKey('i', function (ev, arg) {
    nsPreferences.setBoolPref("accessibility.browsewithcaret", true);
}, 'キャレットモード', true);

key.setCaretKey('i', function (ev, arg) {
    nsPreferences.setBoolPref("accessibility.browsewithcaret", false);
}, 'キャレットモードを抜ける', true);


/* HoK */
// http://d.hatena.ne.jp/mooz/20091107/p2
key.setViewKey('C-o', function (aEvent, aArg) {
    ext.exec("hok-start-foreground-mode", aArg);
}, 'Hit a Hint を開始', true);

key.setViewKey('E', function (aEvent, aArg) {
    ext.exec("hok-start-background-mode", aArg);
}, 'リンクをバックグラウンドで開く Hit a Hint を開始', true);

key.setViewKey(';', function (aEvent, aArg) {
    ext.exec("hok-start-extended-mode", aArg);
}, 'HoK - 拡張ヒントモード', true);

key.setViewKey(['C-c', 'C-e'], function (aEvent, aArg) {
    ext.exec("hok-start-continuous-mode", aArg);
}, 'リンクを連続して開く Hit a Hint を開始', true);


/* anything */
// http://lab.designsatellites.jp/?p=1173
//Tanything 0.1.4用設定
plugins.options["tanything_opt.keymap"] = {
    "C-z"   : "prompt-toggle-edit-mode",        //ローカルキーバインドモードを抜けて編集モードに移行
    "C-v"   : "prompt-next-page",               //一画面スクロールダウン
    "M-v"   : "prompt-previous-page",           //一画面スクロールアップ
    "j"     : "prompt-next-completion",         //次のアイテムに移動
    "k"     : "prompt-previous-completion",     //前のアイテム移動
    "g"     : "prompt-beginning-of-candidates", //最初のアイテムに移動
    "G"     : "prompt-end-of-candidates",       //最後のアイテムに移動
    // Tanything specific actions
    "q"     : "localClose",                     //選択したタブを閉じる
    "p"     : "localLeftclose",                 //選択したタブの左にあるタブをすべて閉じる
    "n"     : "localRightclose",                //選択したタブの右にあるタブをすべて閉じる
    "M-a"   : "localAllclose",                  //選択したタブ以外をすべて閉じる(キーバインド”a”だと押し間違いがあるので"M-a"に変更。)
    "c"     : "localClipUT",                    //選択したタブのタイトルとURLをHTMLタグつきでコピー
    "C"     : "localClipU",                     //選択したタブのURLをHTMLタグつきでコピー
    "e"     : "localMovetoend",                 //選択したタブを末尾に移動
    "a"     : "localMovetostart",               //選択したタブを先頭に移動//追加
};

key.setViewKey('C-;', function (ev, arg) {
    ext.exec("tanything", arg);
}, 'タブを一覧表示', true);


/* bmany */
// http://d.hatena.ne.jp/mooz/20091213/p1

key.setViewKey(['M-SPC', 'M-SPC'], function (ev, arg) {
    ext.exec("bmany-list-all-bookmarks", arg, ev);
}, "bmany - ブックマークを一覧表示");

key.setViewKey([':', 'B'], function (ev, arg) {
    ext.exec("bmany-list-bookmarklets", arg, ev);
}, "bmany - ブックマークレットを一覧表示");

key.setViewKey([':', 'k'], function (ev, arg) {
    ext.exec("bmany-list-bookmarks-with-keyword", arg, ev);
}, "bmany - キーワード付きブックマークを一覧表示");

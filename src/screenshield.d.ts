declare module 'resource:///org/gnome/shell/ui/screenShield.js' {
    export class ScreenShield extends Signals.EventEmitter {
        constructor() { }

        async _getLoginSession() { }

        _setActive(active: boolean) { }

        _setLocked(locked: boolean) { }

        _activateDialog() { }

        _maybeCancelDialog() { }

        _becomeModal() { }

        async _syncInhibitor() { }

        _prepareForSleep(loginManager, aboutToSuspend) { }

        _onStatusChanged(status) { }

        _activateFade(lightbox, time) { }

        _onUserBecameActive() { }

        _onLongLightbox(lightBox) { }

        _onShortLightbox(lightBox) { }

        showDialog() { }

        _hideLockScreenComplete() { }

        _showPointer() { }

        _hidePointer() { }

        _hidePointerUntilMotion() { }

        _hideLockScreen(animate) { }

        _ensureUnlockDialog(allowCancel) { }

        _onUnlockFailed() { }

        _resetLockScreen(params) { }

        _lockScreenShown(params) { }

        _wakeUpScreen() { }

        get locked(): boolean { }

        get active(): boolean { }

        get activationTime(): number { }

        deactivate(animate) { }

        _continueDeactivate(animate) { }

        _completeDeactivate() { }

        activate(animate) { }

        addCredentialManager(serviceName, credentialManager) { }

        removeCredentialManager(serviceName) { }

        lock(animate) { }

        lockIfWasLocked() { }
    }

    export default ScreenShield;
}

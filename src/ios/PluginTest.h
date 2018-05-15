#import <Cordova/CDVPlugin.h>

@interface PluginTest : CDVPlugin {
}

- (void)echo:(CDVInvokedUrlCommand *)command;

@end;
#import "PluginTest.h"
#import <Cordova/CDVAvailability.h>

@implementation PluginTest

- (void)pluginInitialize {
}

- (void)echo:(CDVInvokedUrlCommand *)command {
    NSString* phrase = [command.arguments objectAtIndex:0];
    NSLog(@"%@", phrase);
}

@end
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import "MoPub.h"
#import "MPGoogleGlobalMediationSettings.h"
#if RCT_DEV
#import <React/RCTDevLoadingView.h>
#endif

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;
  
  MPGoogleGlobalMediationSettings *mediationSettings = [[MPGoogleGlobalMediationSettings alloc] init];
  
  MPMoPubConfiguration * sdkConfig = [[MPMoPubConfiguration alloc] initWithAdUnitIdForAppInitialization: @"0ac59b0996d947309c33f59d6676399f"];
  sdkConfig.globalMediationSettings = [[NSArray alloc] initWithObjects:mediationSettings, nil];
  sdkConfig.mediatedNetworks = @[];
  sdkConfig.advancedBidders = nil;
  [[MoPub sharedInstance] initializeSdkWithConfiguration:sdkConfig completion:^{
    NSLog(@"SDK initialization complete");
    BOOL r = [MoPub sharedInstance].shouldShowConsentDialog;

    NSLog(@"ask for bool");
    if(r){
      [[MoPub sharedInstance] loadConsentDialogWithCompletion:^(NSError *error){
        NSLog(@"error ?");
       NSLog(@"%@", error);
      }];
    }
    
  }];

  #ifdef DEBUG
    jsCodeLocation = [NSURL URLWithString:@"http://192.168.178.3:8081/index.bundle?platform=ios&dev=true"];;
  #else
    jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  #endif

  RCTBridge *bridge = [[RCTBridge alloc] initWithBundleURL:jsCodeLocation
                                            moduleProvider:nil
                                             launchOptions:launchOptions];
  #if RCT_DEV
    [bridge moduleForClass:[RCTDevLoadingView class]];
  #endif
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                moduleName:@"testproj"
                                                initialProperties:nil];

  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

@end

# Silent Image Load Failure in Expo Image Component

This repository demonstrates a common, yet frustrating, bug in Expo's `Image` component: the silent failure to load remote images.  The image may not load, showing a blank space, but no error messages appear in the console, making debugging difficult.  This example shows the problem and provides a solution using error handling and fallback mechanisms.

## Problem
The `Image` component from Expo sometimes fails to load images from remote URLs without any indication.  This is particularly problematic in production environments where you can't easily track down the root cause.

## Solution
The provided solution demonstrates how to implement robust error handling for image loading.  It uses the `onError` prop to detect loading failures and gracefully handles those by providing a placeholder or fallback image.
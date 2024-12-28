# Vasi Animation Unity Plugin

## Overview
The Vasi Animation Unity Plugin is designed to load and display `.vasi` animation files within Unity. This plugin provides a simple interface for integrating VASI animations into your Unity projects.

## Project Structure
- **Assets/Scripts/Animation/VasiAnimation.cs**: Contains the `VasiAnimation` class for loading and displaying `.vasi` animations.
- **Assets/Plugins/VasiAnimationLibrary.dll**: Compiled DLL for the VasiAnimation library.
- **convertor/export/sample.vasi**: A sample `.vasi` animation file for testing purposes.

## Setup Instructions
1. Clone the repository to your local machine.
2. Open the Unity project.
3. Ensure that the `VasiAnimationLibrary.dll` is referenced in your Unity project.
4. Place your `.vasi` files in the `convertor/export/` directory.

## Usage
To use the VasiAnimation class in your scripts:
1. Create an instance of the `VasiAnimation` class.
2. Call `LoadAnimation(string filePath)` with the path to your `.vasi` file.
3. Use `PlayAnimation()` to start the animation playback.

## Dependencies
- Unity 2020.3 or later

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
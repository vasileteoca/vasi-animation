// Path to the .fla file
var flaFilePath = "E:/projects/VectorAnimation/convertor/RECOVER_test_flower.fla";

// Open the .fla file
fl.openDocument(flaFilePath);

// Get the active document
var doc = fl.getDocumentDOM();

// Export each frame as an SVG
var timeline = doc.getTimeline();
var numFrames = timeline.frameCount;

for (var i = 0; i < numFrames; i++) {
    timeline.currentFrame = i;
    var svgFilePath = "E:/projects/VectorAnimation/convertor/output_svgs/frame_" + i + ".svg";
    doc.exportFile(svgFilePath, "SVG");
}

// Close the document
doc.close(false);
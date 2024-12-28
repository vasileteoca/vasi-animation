async function fetchVasiFile() {
    const response = await fetch('../convertor/export/output.vasi');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    return text;
}

function parseVasiFile(vasiContent) {
    const sections = vasiContent.split('==================');
    const svgContents = [];
    const frameDurations = [];

    console.log('Sections:', sections);

    for (let i = 0; i < sections.length - 1; i += 2) {
        const svgContent = sections[i].trim();
        const frameDurationLine = sections[i + 1].trim();

        console.log('SVG Content:', svgContent);
        console.log('Frame Duration Line:', frameDurationLine);

        const frameDuration = parseInt(frameDurationLine.split(': ')[1], 10);

        svgContents.push(svgContent);
        frameDurations.push(frameDuration);
    }

    console.log('SVG Contents:', svgContents);
    console.log('Frame Durations:', frameDurations);

    return { svgContents, frameDurations };
}

function displayAnimation(svgContents, frameDurations) {
    const container = document.getElementById('animation-container');
    let currentIndex = 0;

    function showNextFrame() {
        if (currentIndex >= svgContents.length) {
            currentIndex = 0;
        }

        const svgContent = svgContents[currentIndex];
        const frameDuration = frameDurations[currentIndex];
        container.innerHTML = svgContent;

        currentIndex++;
        setTimeout(showNextFrame, frameDuration);
    }

    showNextFrame();
}

async function init() {
    try {
        const vasiContent = await fetchVasiFile();
        const { svgContents, frameDurations } = parseVasiFile(vasiContent);
        displayAnimation(svgContents, frameDurations);
    } catch (error) {
        console.error('Error fetching or parsing .vasi file:', error);
    }
}

init();
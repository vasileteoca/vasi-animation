import os
import random

# Define the directory containing the SVG files
svg_dir = 'E:/projects/VectorAnimation/convertor/svgs'

# Define the output .vasi file path
vasi_file_path = 'E:/projects/VectorAnimation/convertor/export/output.vasi'

# Ensure the output directory exists
output_dir = os.path.dirname(vasi_file_path)
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Check if the SVG directory exists
if not os.path.exists(svg_dir):
    print(f"Error: The directory {svg_dir} does not exist.")
else:
    # Get a list of all SVG files in the directory
    svg_files = [f for f in os.listdir(svg_dir) if f.endswith('.svg')]

    # Open the .vasi file for writing
    with open(vasi_file_path, 'w') as vasi_file:
        for svg_file in svg_files:
            # Read the content of the SVG file
            with open(os.path.join(svg_dir, svg_file), 'r') as file:
                svg_content = file.read()
            
            # Generate a random value between 100 and 1000 for frame duration
            frame_duration = random.randint(20, 200)
            
            # Write the content to the .vasi file using the specified template
            vasi_file.write(svg_content)
            vasi_file.write('\n==================\n')
            vasi_file.write(f'Frame Duration: {frame_duration}\n')
            vasi_file.write('==================\n')

    print(f'Generated {vasi_file_path}')
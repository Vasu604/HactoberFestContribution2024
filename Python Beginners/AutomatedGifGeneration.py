import imageio
from PIL import Image, ImageDraw
import random
import os

# Function to generate a random color image
def create_random_color_image(size=(200, 200)):
    img = Image.new('RGB', size)
    draw = ImageDraw.Draw(img)
    random_color = (random.randint(0, 255), random.randint(0, 255), random.randint(0, 255))
    draw.rectangle([0, 0, size[0], size[1]], fill=random_color)
    return img

# Function to generate frames and save them as temporary images
def generate_frames(num_frames=10, size=(200, 200)):
    frames = []
    for i in range(num_frames):
        img = create_random_color_image(size)
        img_path = f"frame_{i}.png"
        img.save(img_path)
        frames.append(img_path)
    return frames

# Function to create GIF from frames
def create_gif(frames, output_file="output.gif", duration=0.5):
    images = []
    for frame in frames:
        images.append(imageio.imread(frame))
    
    imageio.mimsave(output_file, images, duration=duration)

    # Optionally, cleanup generated frames
    for frame in frames:
        os.remove(frame)
    
    print(f"GIF created successfully: {output_file}")

# Main automation process
def automate_gif_generation():
    # Step 1: Generate frames
    num_frames = 10
    frames = generate_frames(num_frames)
    
    # Step 2: Create GIF from the generated frames
    create_gif(frames, output_file="automated.gif", duration=0.3)

# Run the automation
automate_gif_generation()

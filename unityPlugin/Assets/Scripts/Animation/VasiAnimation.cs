using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.IO;

public class VasiAnimation : MonoBehaviour
{
    private string animationFilePath;
    private List<AnimationFrame> frames;
    private int currentFrame;
    private float frameDuration;
    private float timer;

    public void LoadAnimation(string filePath)
    {
        animationFilePath = filePath;
        frames = new List<AnimationFrame>();
        ParseVasiFile(animationFilePath);
    }

    private void ParseVasiFile(string filePath)
    {
        // Load the .vasi file and parse its contents
        if (File.Exists(filePath))
        {
            string[] lines = File.ReadAllLines(filePath);
            foreach (string line in lines)
            {
                // Example parsing logic (to be replaced with actual .vasi format)
                string[] parts = line.Split(',');
                if (parts.Length == 2)
                {
                    AnimationFrame frame = new AnimationFrame
                    {
                        spriteName = parts[0],
                        duration = float.Parse(parts[1])
                    };
                    frames.Add(frame);
                }
            }
        }
        else
        {
            Debug.LogError("Animation file not found: " + filePath);
        }
    }

    public void PlayAnimation()
    {
        currentFrame = 0;
        timer = 0f;
        StartCoroutine(Animate());
    }

    private IEnumerator Animate()
    {
        while (currentFrame < frames.Count)
        {
            timer += Time.deltaTime;
            if (timer >= frames[currentFrame].duration)
            {
                timer = 0f;
                currentFrame++;
                // Logic to display the current frame (e.g., update sprite)
            }
            yield return null;
        }
    }

    private class AnimationFrame
    {
        public string spriteName;
        public float duration;
    }
}
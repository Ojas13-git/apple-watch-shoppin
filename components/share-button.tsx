"use client";

import { useRef } from "react";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";

export function ShareButton() {
  const watchPreviewRef = useRef<HTMLDivElement>(null); // Reference to the WatchPreview component

  /**
   * 🖼️ **Take Screenshot of WatchPreview**
   */
  const captureImage = async (): Promise<Blob | null> => {
    if (!watchPreviewRef.current) return null;
    try {
      const canvas = await html2canvas(watchPreviewRef.current, { useCORS: true });
      const imageBlob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob(resolve, 'image/png')
      );
      if (!imageBlob) throw new Error('❌ Failed to generate image blob');
      return imageBlob;
    } catch (error) {
      console.error("❌ Error capturing image:", error);
      return null;
    }
  };

  /**
   * 🔽 **Download Image**
   */
  const handleDownload = async () => {
    try {
      const imageBlob = await captureImage();
      if (!imageBlob) return;

      const imageUrl = URL.createObjectURL(imageBlob);
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'watch-design.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(imageUrl); // Free memory
    } catch (error) {
      console.error("❌ Error downloading image:", error);
    }
  };

  /**
   * 📤 **Share Image on Socials**
   */
  const handleShare = async () => {
    try {
      const imageBlob = await captureImage();
      if (!imageBlob) return;

      const file = new File([imageBlob], 'watch-design.png', { type: 'image/png' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: 'My Apple Watch Design',
          text: 'Check out my custom Apple Watch design!',
          files: [file],
        });
      } else {
        console.warn("❌ Sharing files is not supported on this browser");
        handleDownload(); // Fallback to download if share is not available
      }
    } catch (error) {
      console.error("❌ Error sharing image:", error);
    }
  };

  return (
    <div className="flex space-x-4">
      <Button onClick={handleShare} className="w-full">
        <Share2 className="w-4 h-4 mr-2" />
        Share Design
      </Button>
      <Button onClick={handleDownload} className="w-full">
        Download Image
      </Button>
    </div>
  );
}

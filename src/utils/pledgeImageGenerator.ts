export interface PledgeData {
  organization: string;
  monthsOfSupport: string;
  minerName?: string;
  minerPhoto?: File | null;
}

export const generatePledgeImage = async (data: PledgeData): Promise<Blob> => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
    throw new Error('Could not get canvas context');
  }

  // Set canvas size to 800x800 for 1:1 aspect ratio
  canvas.width = 800;
  canvas.height = 800;

  // Background setup
  if (data.minerPhoto) {
    await drawBackgroundImage(ctx, data.minerPhoto, canvas.width, canvas.height);
  } else {
    // Default gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#1e293b'); // slate-800
    gradient.addColorStop(1, '#374151'); // gray-700
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  // Add semi-transparent overlay for text readability
  ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw border
  ctx.strokeStyle = '#f59e0b'; // amber-500
  ctx.lineWidth = 6;
  ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

  // Draw inner border
  ctx.strokeStyle = '#fbbf24'; // amber-400
  ctx.lineWidth = 2;
  ctx.strokeRect(45, 45, canvas.width - 90, canvas.height - 90);

  // Title
  ctx.fillStyle = '#fbbf24'; // amber-400
  ctx.font = 'bold 48px Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('PLEDGE CERTIFICATE', canvas.width / 2, 150);

  // Main pledge text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 36px Arial, sans-serif';
  
  const mainText = `I pledge to support the ${data.organization}`;
  const timeText = `for ${data.monthsOfSupport} ${parseInt(data.monthsOfSupport) === 1 ? 'month' : 'months'}`;
  
  // Draw main text with line breaks if needed
  drawWrappedText(ctx, mainText, canvas.width / 2, 300, 700, 45);
  drawWrappedText(ctx, timeText, canvas.width / 2, 400, 700, 45);

  // Optional miner text
  if (data.minerName) {
    ctx.font = '28px Arial, sans-serif';
    const minerText = `with the hashrate of the ${data.minerName}.`;
    drawWrappedText(ctx, minerText, canvas.width / 2, 500, 700, 40);
  }

  // Decorative elements
  drawDecorations(ctx, canvas.width, canvas.height);

  // HashImpact branding
  ctx.fillStyle = '#f59e0b'; // amber-500
  ctx.font = '20px Arial, sans-serif';
  ctx.fillText('HashImpact Project', canvas.width / 2, canvas.height - 80);

  // Convert canvas to blob
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Failed to create image blob'));
        }
      },
      'image/jpeg',
      0.9
    );
  });
};

const drawBackgroundImage = async (
  ctx: CanvasRenderingContext2D,
  file: File,
  canvasWidth: number,
  canvasHeight: number
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      // Calculate dimensions to fill canvas while maintaining aspect ratio
      const scale = Math.max(canvasWidth / img.width, canvasHeight / img.height);
      const scaledWidth = img.width * scale;
      const scaledHeight = img.height * scale;
      const x = (canvasWidth - scaledWidth) / 2;
      const y = (canvasHeight - scaledHeight) / 2;

      // Draw image
      ctx.drawImage(img, x, y, scaledWidth, scaledHeight);

      // Apply desaturation and contrast reduction
      ctx.globalCompositeOperation = 'multiply';
      ctx.fillStyle = 'rgba(150, 150, 150, 0.7)';
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      ctx.globalCompositeOperation = 'source-over';

      resolve();
    };
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};

const drawWrappedText = (
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
): void => {
  const words = text.split(' ');
  let line = '';
  let currentY = y;

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' ';
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;

    if (testWidth > maxWidth && i > 0) {
      ctx.fillText(line.trim(), x, currentY);
      line = words[i] + ' ';
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), x, currentY);
};

const drawDecorations = (ctx: CanvasRenderingContext2D, width: number, height: number): void => {
  // Draw corner decorations - adjusted for smaller canvas
  ctx.strokeStyle = '#fbbf24'; // amber-400
  ctx.lineWidth = 2;
  
  // Top left corner
  ctx.beginPath();
  ctx.moveTo(75, 105);
  ctx.lineTo(105, 105);
  ctx.lineTo(105, 75);
  ctx.stroke();

  // Top right corner
  ctx.beginPath();
  ctx.moveTo(width - 75, 105);
  ctx.lineTo(width - 105, 105);
  ctx.lineTo(width - 105, 75);
  ctx.stroke();

  // Bottom left corner
  ctx.beginPath();
  ctx.moveTo(75, height - 105);
  ctx.lineTo(105, height - 105);
  ctx.lineTo(105, height - 75);
  ctx.stroke();

  // Bottom right corner
  ctx.beginPath();
  ctx.moveTo(width - 75, height - 105);
  ctx.lineTo(width - 105, height - 105);
  ctx.lineTo(width - 105, height - 75);
  ctx.stroke();
};

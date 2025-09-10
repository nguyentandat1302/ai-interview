import { useRef, useState } from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';

export default function InterviewPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsRecording(true);
    } catch (err) {
      console.error('Không thể bật camera/mic:', err);
    }
  };

  return (
    <Box p={5}>
      <Heading mb={4}>Phỏng vấn thử</Heading>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: '100%', borderRadius: '10px' }}
      />
      <Button
        mt={4}
        colorScheme="teal"
        onClick={startCamera}
        disabled={isRecording}
      >
        Bật Camera & Mic
      </Button>
    </Box>
  );
}

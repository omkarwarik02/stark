import { useState } from "react";
import { Heart } from "lucide-react";

interface LikeButtonProps {
  initialCount: number;
  initialIsLiked: boolean;
}

export default function LikeButton({
  initialCount,
  initialIsLiked,
}: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [count, setCount] = useState<number>(initialCount);

  const toggleLike = (): void => {
    if (!isLiked) {
      setIsLiked(true);
      setCount(count + 1);
    } else {
      setIsLiked(false);
      setCount(count - 1);
    }
  };
  return (
    <>
      <button onClick={toggleLike} className="flex flex-col items-center gap-1">
        <Heart
          size={24}
          color={isLiked ? "red" : "gray"}
          fill={isLiked ? "red" : "gray"}
        ></Heart>
        <span>{count}</span>
      </button>
    </>
  );
}

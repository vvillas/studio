import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EmblaCarouselType } from 'embla-carousel-react';
import { useCallback, useState, useEffect } from 'react';
import { Button } from './button';

type DotButtonProps = {
  selected: boolean;
  onClick: () => void;
};

export const DotButton = ({ selected, onClick }: DotButtonProps) => (
  <button
    className={`embla__dot h-2 w-2 rounded-full ${selected ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}
    onClick={onClick}
  />
);

type PrevNextButtonProps = {
  emblaApi: EmblaCarouselType | undefined;
};

const usePrevNextButtons = (emblaApi: EmblaCarouselType | undefined) => {
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const setupButtons = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setupButtons();
    emblaApi.on('select', setupButtons);
  }, [emblaApi, setupButtons]);

  return { prevBtnEnabled, nextBtnEnabled };
};

export const PrevButton = ({ emblaApi }: PrevNextButtonProps) => {
  const { prevBtnEnabled } = usePrevNextButtons(emblaApi);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  return (
    <Button onClick={scrollPrev} disabled={!prevBtnEnabled} variant="ghost" size="icon" className="bg-white/50 hover:bg-white/75">
      <ChevronLeft className="h-6 w-6" />
    </Button>
  );
};

export const NextButton = ({ emblaApi }: PrevNextButtonProps) => {
  const { nextBtnEnabled } = usePrevNextButtons(emblaApi);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Button onClick={scrollNext} disabled={!nextBtnEnabled}  variant="ghost" size="icon" className="bg-white/50 hover:bg-white/75">
      <ChevronRight className="h-6 w-6" />
    </Button>
  );
};

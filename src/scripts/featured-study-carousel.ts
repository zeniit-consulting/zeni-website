class MinimalCarousel {
  private slides: NodeListOf<HTMLElement>;
  private carousel: HTMLElement | null;
  private swipeHint: HTMLElement | null;
  
  private currentIndex: number = 0;
  private totalSlides: number;
  private autoPlayInterval: number | null = null;
  private autoPlayDelay: number = 3000;
  private isTransitioning: boolean = false;
  private isPaused: boolean = false;

  // Touch/Swipe variables
  private touchStartX: number = 0;
  private touchEndX: number = 0;
  private isDragging: boolean = false;
  private dragStartX: number = 0;

  constructor() {
    // Menambahkan generic <HTMLElement> untuk type-casting yang lebih baik
    this.slides = document.querySelectorAll<HTMLElement>('.featured-study');
    this.carousel = document.querySelector<HTMLElement>('.featured-carousel');
    this.swipeHint = document.querySelector<HTMLElement>('.swipe-hint');
    this.totalSlides = this.slides.length;

    // Hanya jalankan init jika elemen utama carousel ditemukan
    if (this.carousel) {
      this.init();
    }
  }

  private init(): void {
    if (this.slides.length > 0) {
      this.slides[0].classList.add('active');
      this.lazyLoadImage(this.slides[0]);
    }

    // Hover pause
    const container = document.querySelector<HTMLElement>('.featured-carousel-container');
    if (container) {
      container.addEventListener('mouseenter', () => this.pause());
      container.addEventListener('mouseleave', () => this.resume());
    }

    // Touch/Swipe events
    this.setupTouchEvents();

    // Keyboard navigation
    this.setupKeyboardNavigation();

    // Show swipe hint on mobile
    this.showSwipeHint();

    // Start autoplay
    this.startAutoPlay();
  }

  private setupTouchEvents(): void {
    // Validasi null check
    if (!this.carousel) return;

    // Menambahkan tipe TouchEvent
    this.carousel.addEventListener('touchstart', (e: TouchEvent) => {
      this.touchStartX = e.touches[0].clientX;
      this.pause();
    }, { passive: true });

    this.carousel.addEventListener('touchmove', (e: TouchEvent) => {
      this.touchEndX = e.touches[0].clientX;
    }, { passive: true });

    this.carousel.addEventListener('touchend', () => {
      this.handleSwipe();
      this.resume();
    });

    // Menambahkan tipe MouseEvent
    this.carousel.addEventListener('mousedown', (e: MouseEvent) => {
      this.isDragging = true;
      this.dragStartX = e.clientX;
      this.pause();
    });

    this.carousel.addEventListener('mousemove', (e: MouseEvent) => {
      if (!this.isDragging) return;
      e.preventDefault();
    });

    this.carousel.addEventListener('mouseup', (e: MouseEvent) => {
      if (!this.isDragging) return;
      this.isDragging = false;
      const dragEndX = e.clientX;
      const diff = this.dragStartX - dragEndX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }
      this.resume();
    });

    this.carousel.addEventListener('mouseleave', () => {
      if (this.isDragging) {
        this.isDragging = false;
        this.resume();
      }
    });
  }

  private handleSwipe(): void {
    const diff = this.touchStartX - this.touchEndX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
  }

  private setupKeyboardNavigation(): void {
    // Menambahkan tipe KeyboardEvent
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        this.prevSlide();
      } else if (e.key === 'ArrowRight') {
        this.nextSlide();
      }
    });
  }

  private showSwipeHint(): void {
    if (!this.swipeHint) return; // Null check tambahan

    if (window.innerWidth <= 640 && !localStorage.getItem('swipe-hint-shown')) {
      setTimeout(() => {
        // Optional chaining (?.) kalau-kalau swipeHint dihapus dari DOM
        this.swipeHint?.classList.add('show');
        localStorage.setItem('swipe-hint-shown', 'true');
        
        setTimeout(() => {
          this.swipeHint?.classList.remove('show');
        }, 3000);
      }, 1000);
    }
  }

  private goToSlide(index: number): void {
    if (this.isTransitioning || index === this.currentIndex || this.totalSlides === 0) return;

    this.isTransitioning = true;
    const prevIndex = this.currentIndex;

    this.slides.forEach(slide => {
      slide.classList.remove('active', 'prev', 'next');
    });

    this.slides[prevIndex].classList.add('prev');
    this.slides[index].classList.add('active');

    this.lazyLoadImage(this.slides[index]);

    this.currentIndex = index;

    this.startAutoPlay();

    setTimeout(() => {
      this.isTransitioning = false;
    }, 700);
  }

  private nextSlide(): void {
    if (this.totalSlides === 0) return; // Mencegah NaN / pembagian dengan 0
    const nextIndex = (this.currentIndex + 1) % this.totalSlides;
    this.goToSlide(nextIndex);
  }

  private prevSlide(): void {
    if (this.totalSlides === 0) return; // Mencegah NaN / pembagian dengan 0
    const prevIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    this.goToSlide(prevIndex);
  }

  private startAutoPlay(): void {
    this.stopAutoPlay();

    this.autoPlayInterval = window.setInterval(() => {
      if (!this.isPaused) {
        this.nextSlide();
      }
    }, this.autoPlayDelay);
  }

  private stopAutoPlay(): void {
    if (this.autoPlayInterval !== null) {
      window.clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  private pause(): void {
    this.isPaused = true;
  }

  private resume(): void {
    this.isPaused = false;
  }

  private lazyLoadImage(slide: HTMLElement): void {
    const imageDiv = slide.querySelector<HTMLElement>('.featured-study__image');
    if (!imageDiv) return; // Null check

    const imageSrc = imageDiv.getAttribute('data-src');
    
    if (imageSrc && !imageDiv.style.backgroundImage) {
      const img = new Image();
      img.onload = () => {
        imageDiv.style.backgroundImage = `url(${imageSrc})`;
      };
      img.src = imageSrc;
    }
  }
}

// Inisialisasi
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new MinimalCarousel();
  });
} else {
  new MinimalCarousel();
}
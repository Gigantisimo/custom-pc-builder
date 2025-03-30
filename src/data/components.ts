
import { PCComponent, PCBuild, Advantage, Guarantee, FAQ } from '@/types';

// CPU Components
export const cpuComponents: PCComponent[] = [
  {
    id: 'cpu-1',
    name: 'AMD Ryzen 9 7950X',
    type: 'cpu',
    price: 56999,
    brand: 'AMD',
    description: 'Мощный 16-ядерный процессор для требовательных задач',
    specs: {
      cores: 16,
      threads: 32,
      baseFrequency: 4.5,
      maxFrequency: 5.7,
      cache: 64,
      tdp: 170
    }
  },
  {
    id: 'cpu-2',
    name: 'Intel Core i9-13900K',
    type: 'cpu',
    price: 54999,
    brand: 'Intel',
    description: 'Флагманский процессор Intel для геймеров и профессионалов',
    specs: {
      cores: 24,
      threads: 32,
      baseFrequency: 3.0,
      maxFrequency: 5.8,
      cache: 36,
      tdp: 125
    }
  },
  {
    id: 'cpu-3',
    name: 'AMD Ryzen 7 7800X3D',
    type: 'cpu',
    price: 39999,
    brand: 'AMD',
    description: 'Оптимальный игровой процессор с технологией 3D V-Cache',
    specs: {
      cores: 8,
      threads: 16,
      baseFrequency: 4.2,
      maxFrequency: 5.0,
      cache: 96,
      tdp: 120
    }
  }
];

// GPU Components
export const gpuComponents: PCComponent[] = [
  {
    id: 'gpu-1',
    name: 'NVIDIA GeForce RTX 4090',
    type: 'gpu',
    price: 189999,
    brand: 'NVIDIA',
    description: 'Самая мощная игровая видеокарта для 4K и трассировки лучей',
    specs: {
      vram: 24,
      memoryType: 'GDDR6X',
      coreClock: 2230,
      boostClock: 2520,
      cudaCores: 16384,
      tdp: 450
    }
  },
  {
    id: 'gpu-2',
    name: 'AMD Radeon RX 7900 XTX',
    type: 'gpu',
    price: 129999,
    brand: 'AMD',
    description: 'Флагманская видеокарта AMD с высокой производительностью',
    specs: {
      vram: 24,
      memoryType: 'GDDR6',
      coreClock: 1855,
      boostClock: 2500,
      streamProcessors: 12288,
      tdp: 355
    }
  },
  {
    id: 'gpu-3',
    name: 'NVIDIA GeForce RTX 4070 Ti',
    type: 'gpu',
    price: 89999,
    brand: 'NVIDIA',
    description: 'Оптимальная видеокарта для игр в 1440p и 4K',
    specs: {
      vram: 12,
      memoryType: 'GDDR6X',
      coreClock: 2310,
      boostClock: 2610,
      cudaCores: 7680,
      tdp: 285
    }
  }
];

// Motherboard Components
export const motherboardComponents: PCComponent[] = [
  {
    id: 'mb-1',
    name: 'ASUS ROG Maximus Z790 Hero',
    type: 'motherboard',
    price: 52999,
    brand: 'ASUS',
    description: 'Премиальная материнская плата для Intel 13-го поколения',
    specs: {
      chipset: 'Z790',
      socket: 'LGA1700',
      memorySlots: 4,
      maxMemory: 128,
      pciExpressSlots: 3,
      m2Slots: 5
    }
  },
  {
    id: 'mb-2',
    name: 'MSI MEG X670E GODLIKE',
    type: 'motherboard',
    price: 69999,
    brand: 'MSI',
    description: 'Топовая материнская плата для AMD Ryzen 7000 серии',
    specs: {
      chipset: 'X670E',
      socket: 'AM5',
      memorySlots: 4,
      maxMemory: 128,
      pciExpressSlots: 4,
      m2Slots: 6
    }
  }
];

// Example PC Builds
export const exampleBuilds: PCBuild[] = [
  {
    id: 'build-gaming',
    name: 'Игровой ПК',
    description: 'Мощная игровая сборка для 4K с трассировкой лучей',
    category: 'gaming',
    totalPrice: 299999,
    components: {
      cpu: cpuComponents[0],
      gpu: gpuComponents[0],
      motherboard: motherboardComponents[1],
      ram: null,
      storage: null,
      psu: null,
      case: null,
      cooling: null
    }
  },
  {
    id: 'build-office',
    name: 'Офисный ПК',
    description: 'Энергоэффективный и бесшумный компьютер для работы',
    category: 'office',
    totalPrice: 59999,
    components: {
      cpu: {
        id: 'cpu-4',
        name: 'Intel Core i5-13400F',
        type: 'cpu',
        price: 16999,
        brand: 'Intel',
        description: 'Эффективный процессор для офисных задач',
        specs: {
          cores: 10,
          threads: 16,
          baseFrequency: 2.5,
          maxFrequency: 4.6,
          cache: 20,
          tdp: 65
        }
      },
      gpu: {
        id: 'gpu-4',
        name: 'Intel UHD 770',
        type: 'gpu',
        price: 0,
        brand: 'Intel',
        description: 'Интегрированная графика для офисных задач',
        specs: {
          vram: 'Shared',
          memoryType: 'Shared',
          coreClock: 1450,
          boostClock: 1450,
          executionUnits: 32,
          tdp: 0
        }
      },
      motherboard: {
        id: 'mb-3',
        name: 'ASUS Prime B760M-A',
        type: 'motherboard',
        price: 11999,
        brand: 'ASUS',
        description: 'Надежная материнская плата для офисного ПК',
        specs: {
          chipset: 'B760',
          socket: 'LGA1700',
          memorySlots: 4,
          maxMemory: 128,
          pciExpressSlots: 2,
          m2Slots: 2
        }
      },
      ram: null,
      storage: null,
      psu: null,
      case: null,
      cooling: null
    }
  },
  {
    id: 'build-workstation',
    name: 'ПК для монтажа видео',
    description: 'Мощная рабочая станция для профессионального видеомонтажа',
    category: 'workstation',
    totalPrice: 359999,
    components: {
      cpu: cpuComponents[0],
      gpu: gpuComponents[0],
      motherboard: motherboardComponents[1],
      ram: null,
      storage: null,
      psu: null,
      case: null,
      cooling: null
    }
  }
];

// Advantages 
export const advantages: Advantage[] = [
  {
    id: 'adv-1',
    title: 'Только топовые компоненты',
    description: 'ASUS, MSI, NVIDIA, AMD — работаем только с проверенными брендами',
    icon: 'award'
  },
  {
    id: 'adv-2',
    title: 'Бесплатная диагностика',
    description: 'Полное тестирование перед отправкой клиенту',
    icon: 'shield-check'
  },
  {
    id: 'adv-3',
    title: 'Сборка за 1–3 дня',
    description: 'Быстрая сборка даже самых сложных конфигураций',
    icon: 'zap'
  },
  {
    id: 'adv-4',
    title: 'Пожизненная поддержка',
    description: 'Консультации по вопросам апгрейда на весь срок службы ПК',
    icon: 'headphones'
  }
];

// Guarantees
export const guarantees: Guarantee[] = [
  {
    id: 'guar-1',
    text: 'Гарантия 2 года на все компоненты'
  },
  {
    id: 'guar-2',
    text: 'Возврат в течение 14 дней'
  },
  {
    id: 'guar-3',
    text: 'Бесплатная доставка по РФ при заказе от 100 000 руб'
  },
  {
    id: 'guar-4',
    text: 'Пожизненная техническая поддержка'
  }
];

// FAQ
export const faqItems: FAQ[] = [
  {
    question: 'Как проверить совместимость компонентов?',
    answer: 'В нашем конфигураторе совместимость проверяется автоматически. Система не позволит выбрать несовместимые компоненты.'
  },
  {
    question: 'Можно ли добавить свои детали в сборку?',
    answer: 'Да, вы можете предоставить собственные компоненты, и мы включим их в сборку, сохраняя гарантию на остальные детали.'
  },
  {
    question: 'Как происходит оплата?',
    answer: 'Мы принимаем оплату картами (Visa, MasterCard), электронными деньгами, банковскими переводами, а также предлагаем рассрочку через банки-партнеры.'
  },
  {
    question: 'Какой срок сборки компьютера?',
    answer: 'Стандартный срок сборки составляет 1-3 рабочих дня в зависимости от сложности конфигурации и наличия компонентов на складе.'
  }
];

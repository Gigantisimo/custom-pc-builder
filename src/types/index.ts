
export interface PCComponent {
  id: string;
  name: string;
  type: ComponentType;
  price: number;
  brand: string;
  description: string;
  image?: string;
  specs: Record<string, string | number>;
}

export type ComponentType = 
  | 'cpu' 
  | 'gpu' 
  | 'motherboard' 
  | 'ram' 
  | 'storage' 
  | 'psu' 
  | 'case'
  | 'cooling';

export interface PCBuild {
  id: string;
  name: string;
  description: string;
  components: Record<ComponentType, PCComponent | null>;
  totalPrice: number;
  image?: string;
  category: BuildCategory;
}

export type BuildCategory = 'gaming' | 'office' | 'workstation';

export interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Guarantee {
  id: string;
  text: string;
}

export interface FAQ {
  question: string;
  answer: string;
}


import React, { useState, useEffect } from 'react';
import { 
  Tabs, TabsContent, TabsList, TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Cpu, Monitor, HardDrive, Package, ShieldCheck, Truck, VideoIcon } from 'lucide-react';
import { PCComponent, ComponentType } from '@/types';
import { 
  cpuComponents, 
  gpuComponents, 
  motherboardComponents 
} from '@/data/components';

const Configurator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ComponentType>('cpu');
  const [selectedComponents, setSelectedComponents] = useState<Record<ComponentType, PCComponent | null>>({
    cpu: null,
    gpu: null,
    motherboard: null,
    ram: null,
    storage: null,
    psu: null,
    case: null,
    cooling: null
  });
  const [additionalOptions, setAdditionalOptions] = useState({
    installOS: false,
    extendedWarranty: false,
    delivery: false
  });
  
  const [totalPrice, setTotalPrice] = useState(0);

  // Update total price when components or options change
  useEffect(() => {
    let price = 0;
    
    // Add price of all selected components
    Object.values(selectedComponents).forEach(component => {
      if (component) price += component.price;
    });
    
    // Add price for additional options
    if (additionalOptions.installOS) price += 5000;
    if (additionalOptions.extendedWarranty) price += 10000;
    if (additionalOptions.delivery) price += 2000;
    
    setTotalPrice(price);
  }, [selectedComponents, additionalOptions]);

  const handleComponentSelect = (type: ComponentType, componentId: string) => {
    let component = null;
    
    switch(type) {
      case 'cpu':
        component = cpuComponents.find(c => c.id === componentId) || null;
        break;
      case 'gpu':
        component = gpuComponents.find(c => c.id === componentId) || null;
        break;
      case 'motherboard':
        component = motherboardComponents.find(c => c.id === componentId) || null;
        break;
      // Additional component types would be handled here
    }
    
    setSelectedComponents(prev => ({
      ...prev,
      [type]: component
    }));
  };

  const handleToggleOption = (option: keyof typeof additionalOptions) => {
    setAdditionalOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  // List of configurable component categories
  const componentCategories = [
    { type: 'cpu', label: 'Процессор', icon: <Cpu className="h-5 w-5" /> },
    { type: 'gpu', label: 'Видеокарта', icon: <VideoIcon className="h-5 w-5" /> },
    { type: 'motherboard', label: 'Материнская плата', icon: <Package className="h-5 w-5" /> },
    // Additional categories would be added here
  ];
  
  const getComponentOptions = (type: ComponentType) => {
    switch(type) {
      case 'cpu': return cpuComponents;
      case 'gpu': return gpuComponents;
      case 'motherboard': return motherboardComponents;
      default: return [];
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <section id="configurator" className="section-padding bg-dark-light">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-center">
          Онлайн-<span className="text-neon-blue">конфигуратор</span>
        </h2>
        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          Создайте свой идеальный компьютер с нашим интерактивным конфигуратором. 
          Все компоненты проверяются на совместимость в режиме реального времени.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Component selection panel */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ComponentType)}>
              <TabsList className="flex overflow-x-auto scrollbar-hidden mb-6 bg-dark-lighter">
                {componentCategories.map(category => (
                  <TabsTrigger 
                    key={category.type} 
                    value={category.type}
                    className="flex items-center gap-2 font-orbitron data-[state=active]:text-neon-blue data-[state=active]:border-b-2 data-[state=active]:border-neon-blue"
                  >
                    {category.icon}
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {componentCategories.map(category => {
                const componentOptions = getComponentOptions(category.type as ComponentType);
                return (
                  <TabsContent key={category.type} value={category.type}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                      {componentOptions.map(component => (
                        <Card 
                          key={component.id} 
                          className={`cursor-pointer transition-all border ${
                            selectedComponents[category.type as ComponentType]?.id === component.id 
                              ? 'border-neon-blue shadow-[0_0_10px_rgba(0,240,255,0.5)]' 
                              : 'border-gray-800 hover:border-gray-600'
                          }`}
                          onClick={() => handleComponentSelect(category.type as ComponentType, component.id)}
                        >
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <Badge className="bg-dark-lighter text-gray-300 mb-2">
                                  {component.brand}
                                </Badge>
                                <CardTitle className="text-lg font-orbitron">
                                  {component.name}
                                </CardTitle>
                              </div>
                              <div className="text-neon-green font-orbitron font-bold">
                                {formatPrice(component.price)}
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-400 mb-2">{component.description}</p>
                            <ul className="text-xs text-gray-400 space-y-1">
                              {Object.entries(component.specs).slice(0, 3).map(([key, value]) => (
                                <li key={key} className="flex justify-between">
                                  <span className="text-gray-500">{key}:</span>
                                  <span>{value}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                );
              })}
            </Tabs>
          </div>
          
          {/* Order summary panel */}
          <div>
            <Card className="bg-dark-lighter border-gray-800 sticky top-24">
              <CardHeader>
                <CardTitle className="font-orbitron text-xl">Ваша конфигурация</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {componentCategories.map(category => {
                    const component = selectedComponents[category.type as ComponentType];
                    return (
                      <li key={category.type} className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          {category.icon}
                          <span className="text-sm text-gray-400">{category.label}:</span>
                        </div>
                        {component ? (
                          <div className="text-sm text-right">
                            <div>{component.name}</div>
                            <div className="text-neon-green">{formatPrice(component.price)}</div>
                          </div>
                        ) : (
                          <span className="text-sm text-gray-600">Не выбрано</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
                
                <Separator className="my-6 bg-gray-800" />
                
                <div className="space-y-4">
                  <h4 className="font-orbitron text-lg">Дополнительные опции</h4>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Monitor className="h-4 w-4 text-gray-400" />
                      <Label htmlFor="install-os" className="text-sm">Установка Windows</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">5 000 ₽</span>
                      <Switch 
                        id="install-os" 
                        checked={additionalOptions.installOS}
                        onCheckedChange={() => handleToggleOption('installOS')}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-gray-400" />
                      <Label htmlFor="warranty" className="text-sm">Расширенная гарантия (3 года)</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">10 000 ₽</span>
                      <Switch 
                        id="warranty" 
                        checked={additionalOptions.extendedWarranty}
                        onCheckedChange={() => handleToggleOption('extendedWarranty')}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4 text-gray-400" />
                      <Label htmlFor="delivery" className="text-sm">Доставка</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">2 000 ₽</span>
                      <Switch 
                        id="delivery" 
                        checked={additionalOptions.delivery}
                        onCheckedChange={() => handleToggleOption('delivery')}
                      />
                    </div>
                  </div>
                </div>
                
                <Separator className="my-6 bg-gray-800" />
                
                <div className="flex justify-between items-center mb-6">
                  <span className="font-orbitron">Итого:</span>
                  <span className="font-orbitron text-xl text-neon-green">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                
                <Button className="w-full bg-neon-blue hover:bg-neon-blue/80 font-orbitron">
                  Оформить заказ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Configurator;

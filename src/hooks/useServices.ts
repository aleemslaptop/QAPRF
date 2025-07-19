import { useState, useEffect } from 'react';
import { Service } from '../types';
import { parseYaml } from '../utils/services';

export const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await fetch('/src/data/services.yml');
        const yamlText = await response.text();
        const { services: parsedServices } = parseYaml(yamlText);
        setServices(parsedServices);
      } catch (error) {
        console.error('Error loading services:', error);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  return { services, loading };
};
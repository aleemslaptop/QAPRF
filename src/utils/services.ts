import { Service } from '../types';

export const parseYaml = (yamlContent: string): { services: Service[] } => {
  // Simple YAML parser for our structured data
  const lines = yamlContent.split('\n');
  const services: Service[] = [];
  let currentService: Partial<Service> | null = null;
  let currentSubServices: any[] = [];
  let inSubServices = false;
  let currentSubService: any = {};

  for (const line of lines) {
    const trimmed = line.trim();
    
    if (trimmed.startsWith('- name:') && !inSubServices) {
      if (currentService) {
        currentService.sub_services = currentSubServices;
        services.push(currentService as Service);
      }
      currentService = { name: trimmed.replace('- name:', '').replace(/"/g, '').trim() };
      currentSubServices = [];
      inSubServices = false;
    } else if (trimmed.startsWith('slug:') && currentService) {
      currentService.slug = trimmed.replace('slug:', '').replace(/"/g, '').trim();
    } else if (trimmed.startsWith('description:') && currentService && !inSubServices) {
      currentService.description = trimmed.replace('description:', '').replace(/"/g, '').trim();
    } else if (trimmed === 'sub_services:') {
      inSubServices = true;
    } else if (trimmed.startsWith('- name:') && inSubServices) {
      if (currentSubService.name) {
        currentSubServices.push(currentSubService);
      }
      currentSubService = { name: trimmed.replace('- name:', '').replace(/"/g, '').trim() };
    } else if (trimmed.startsWith('description:') && inSubServices) {
      currentSubService.description = trimmed.replace('description:', '').replace(/"/g, '').trim();
    }
  }

  if (currentSubService.name) {
    currentSubServices.push(currentSubService);
  }
  if (currentService) {
    currentService.sub_services = currentSubServices;
    services.push(currentService as Service);
  }

  return { services };
};
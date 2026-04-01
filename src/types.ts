export interface HookSuggestion {
  title: string;
  script: string;
  visualLayout: string;
  retentionStrategy: string;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  category: 'Mystery' | 'Bold' | 'Educational' | 'Entertainment';
}

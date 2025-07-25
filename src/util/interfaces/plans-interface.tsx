export interface PlansProps {
  id: string;
  title: string;
  description: string;
  value: number;
  advantages: string[];
  link: string;
}

export interface CreatePlan {
  title: string;
  description: string;
  value: number;
  advantages: string[];
  link: string;
}

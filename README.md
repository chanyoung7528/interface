# Interface - React + Vite + Storybook

React와 Vite, Storybook으로 구성된 컴포넌트 라이브러리 프로젝트입니다.

## 기술 스택

- **React** 18.3.1
- **Vite** 6.0.5
- **Storybook** 8.6.14
- **TypeScript** 5.6.2

## 시작하기

### 1. 의존성 설치

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. 개발 서버 실행

```bash
# Vite 개발 서버
npm run dev

# Storybook 실행
npm run storybook
```

### 3. 빌드

```bash
# Vite 프로덕션 빌드
npm run build

# Storybook 빌드
npm run build-storybook
```

## 프로젝트 구조

```
interface/
├── .storybook/          # Storybook 설정
│   ├── main.ts
│   └── preview.ts
├── src/
│   ├── components/      # 컴포넌트
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.css
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   ├── Card/
│   │   │   ├── Card.tsx
│   │   │   ├── Card.css
│   │   │   ├── Card.stories.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 사용 가능한 스크립트

- `npm run dev` - Vite 개발 서버 시작 (http://localhost:5173)
- `npm run build` - 프로덕션 빌드
- `npm run preview` - 프로덕션 빌드 미리보기
- `npm run lint` - ESLint 실행
- `npm run storybook` - Storybook 개발 서버 시작 (http://localhost:6006)
- `npm run build-storybook` - Storybook 정적 빌드

## 컴포넌트 개발 가이드

### 새 컴포넌트 만들기

1. `src/components/` 에 컴포넌트 폴더 생성
2. 컴포넌트 파일 작성 (`ComponentName.tsx`)
3. 스타일 파일 작성 (`ComponentName.css`)
4. Storybook 스토리 작성 (`ComponentName.stories.tsx`)
5. index 파일에서 export

### 컴포넌트 예제

```tsx
// Button.tsx
export interface ButtonProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'danger';
}

export function Button({ label, size = 'medium', variant = 'primary' }: ButtonProps) {
  return (
    <button className={`btn btn--${size} btn--${variant}`}>
      {label}
    </button>
  );
}
```

### Storybook 스토리 예제

```tsx
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};
```

## Storybook 애드온

프로젝트에 포함된 Storybook 애드온:

- **@storybook/addon-essentials** - 필수 애드온 모음
- **@storybook/addon-interactions** - 인터랙션 테스트
- **@storybook/addon-links** - 스토리 간 링크
- **@storybook/addon-onboarding** - 온보딩 가이드
- **@chromatic-com/storybook** - Chromatic 통합

## 라이선스

MIT

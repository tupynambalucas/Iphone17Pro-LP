import path from 'node:path';
import { fileURLToPath } from 'node:url';

import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

import type { Linter } from 'eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: Linter.Config[] = [
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  // ========================================================================
  // CONFIGURAÇÃO GLOBAL - Base para todo o monorepo
  // ========================================================================
  {
    name: 'monorepo/global-typescript-config',
    files: ['**/*.{js,mjs,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
      'import/ignore': [
        '.css$',
        '.scss$',
        '.sass$',
        '.less$',
        '.styl$',
        '.module.(css|scss|sass|less|styl)$',
      ],
    },
    rules: {
      // =====================================================================
      // 🔴 REGRAS CRÍTICAS - Previnem bugs em produção
      // =====================================================================
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'warn',

      // =====================================================================
      // 🟡 REGRAS IMPORTANTES - Melhoram qualidade
      // =====================================================================
      '@typescript-eslint/require-await': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false,
          fixStyle: 'separate-type-imports',
        },
      ],

      // =====================================================================
      // 🟢 REGRAS DE ESTILO - Desabilitadas ou flexíveis
      // =====================================================================

      // Import order: OFF (use Prettier ou faça manualmente)
      'import/order': 'off',
      'import/newline-after-import': 'off',
      'import/first': 'off',

      // Permitir default exports (útil para Next.js, React Router, etc)
      'import/no-default-export': 'off',

      // Imports duplicados: apenas aviso
      'import/no-duplicates': 'warn',
      'import/no-unresolved': [
        'error',
        {
          ignore: [
            '.css$',
            '.scss$',
            '.sass$',
            '.less$',
            '.styl$',
            '.module.(css|scss|sass|less|styl)$',
          ],
        },
      ],

      // Naming convention: DESABILITADO (muito restritivo)
      '@typescript-eslint/naming-convention': 'off',

      // =====================================================================
      // QUALIDADE GERAL
      // =====================================================================
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      eqeqeq: ['error', 'always', { null: 'ignore' }],
    },
  },

  // ========================================================================
  // IGNORES GLOBAIS
  // ========================================================================
  {
    name: 'monorepo/ignores',
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/build/**',
      '**/.next/**',
      '**/coverage/**',
      '**/.turbo/**',
      '**/.eslintcache',
      '**/*.json',
      '**/*.css',
      '**/*.scss',
      '**/*.sass',
      '**/*.less',
      '**/*.styl',
      'mongo-keyfile',
      'docker-compose*.yml',
      '**/types/**/*.d.ts',
      '**/*.d.ts',
      '**/vite-env.d.ts',
    ],
  },

  // ========================================================================
  // CONFIG FILES NA RAIZ
  // ========================================================================
  {
    name: 'monorepo/root-config-files',
    files: ['*.{js,mjs,ts}', '*.config.{js,mjs,ts}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      // Permitir 'any' SOMENTE em arquivos de config
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
    },
  },

  // ========================================================================
  // PACKAGES/engine-core - Código compartilhado (STRICT)
  // ========================================================================
  {
    name: 'monorepo/packages-engine-core',
    files: ['packages/engine-core/**/*.{js,mjs,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: path.join(__dirname, 'packages/engine-core'),
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],
      // engine-core: APIs públicas devem ter tipos explícitos
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'error',

      // engine-core DEVE ser o código mais rigoroso
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'warn',
    },
  },

  // ========================================================================
  // PACKAGES/engine-react - React Application
  // ========================================================================
  {
    name: 'monorepo/packages-engine-react',
    files: ['packages/engine-react/**/*.{js,mjs,ts,tsx}'],
    ignores: [
      'packages/engine-react/src/types/**/*.d.ts',
      'packages/engine-react/**/*.d.ts',
      'packages/engine-react/src/vite-env.d.ts',
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: path.join(__dirname, 'packages/engine-react'),
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: path.join(__dirname, 'packages/engine-react/tsconfig.json'),
          alwaysTryTypes: true,
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      // ===== REACT HOOKS (CRÍTICO) =====
      ...reactHooksPlugin.configs.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',

      // ===== REACT GERAL =====
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'warn',
      'react/no-array-index-key': 'warn',
      'react/jsx-no-target-blank': 'error',
      'react/jsx-key': ['error', { checkFragmentShorthand: true }],

      // ===== REACT REFRESH =====
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // ===== TYPESCRIPT NO engine-react =====
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],
      'react/no-unknown-property': [
        'error',
        {
          ignore: [
            'dispose',
            'castShadow',
            'receiveShadow',
            'geometry',
            'material',
            'userData',
            'args', // Essencial para construtores (new Three.Color(args))
            'position',
            'rotation',
            'scale',
            'intensity',
            'intensity',
            'rotation-x', // Suporte a propriedades atalizadas do R3F
            'rotation-y',
            'rotation-z',
            'lookAt',
            'attach', // Crucial para acoplamento de objetos
            'target-position',
            'envMapIntensity',
            'shadow-bias',
            'shadow-normalBias',
          ],
        },
      ],
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-indexed-object-style': 'off',

      // Console: permitir em dev, erro em produção
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    },
  },
  {
    name: 'monorepo/generated-models-shimming',
    files: ['**/*.model.tsx'],
    rules: {
      // Desabilita a obrigatoriedade de 'import type' para modelos gerados
      '@typescript-eslint/consistent-type-imports': 'off',
      // O gltfjsx usa as-casting que o ESLint pode reclamar
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
    },
  },
];

export default config;

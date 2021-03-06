declare module '*.css'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'


interface Props {
  children?: React.ReactNode
}

type Option = {
  label: string | number,
  value?: string,
  secondaryLabel?: string | null
};

type Options = Option[];
import {
  Context,
  createContext as ReactCreateContext,
  Provider,
  useContext as ReactUseContext,
} from "react";

export interface CreateContextOptions {
  /**
   * ture の場合、context の値がエラーの場合にエラーをスローします。
   */
  strict?: boolean;
  /**
   * context の値がエラーの場合にスローするエラーのメッセージです。
   */
  errorMessage?: string;
  /**
   * context の名前です。
   */
  name?: string;
}

type CreateContextReturn<T> = [Provider<T>, () => T, Context<T>];

/**
 * 名前つきの context とそれに対応する Provider を作成する関数です。
 * TODO: この関数は、unwheel-pkg/frontend-react に移動する予定です。
 *
 * @param options context のオプションです。
 */
export const createContext = <ContextType>(
  options: CreateContextOptions = {}
): CreateContextReturn<ContextType> => {
  const {
    strict = true,
    errorMessage = "context は未定義です。コンポーネントをプロバイダ内にラップするのを忘れている可能性があります。",
    name,
  } = options;

  const Context = ReactCreateContext<ContextType | undefined>(undefined);
  Context.displayName = name;

  const useContext = () => {
    const context = ReactUseContext(Context);

    if (!context && strict) {
      throw new Error(`${name}: ${errorMessage}`);
    }

    return context;
  };

  return [
    Context.Provider,
    useContext,
    Context,
  ] as CreateContextReturn<ContextType>;
};

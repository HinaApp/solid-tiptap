import { Accessor } from 'solid-js';
import { Component } from 'solid-js';
import type { Decoration } from '@tiptap/pm/view';
import type { DecorationWithType } from '@tiptap/core';
import { DynamicProps } from 'solid-js/web';
import { Editor } from '@tiptap/core';
import type { JSX } from 'solid-js';
import type { JSXElement } from 'solid-js';
import { MarkType } from '@tiptap/pm/model';
import type { Node as Node_2 } from '@tiptap/pm/model';
import { NodeType } from '@tiptap/pm/model';
import { NodeView } from '@tiptap/core';
import type { NodeViewProps } from '@tiptap/core';
import type { NodeViewRenderer } from '@tiptap/core';
import type { NodeViewRendererOptions } from '@tiptap/core';
import type { NodeViewRendererProps } from '@tiptap/core';
import { SetStoreFunction } from 'solid-js/store';
import type { ValidComponent } from 'solid-js';

export declare const NodeViewContent: <T extends ValidComponent>(props: NodeViewContentProps<T> | Omit<NodeViewContentProps<T>, "component">) => JSXElement;

declare type NodeViewContentProps<T extends ValidComponent> = DynamicProps<T> & Pick<JSX.CustomAttributes<T>, "ref">;

export declare class SolidNodeView extends NodeView<Component<NodeViewProps>, Editor, SolidNodeViewRendererOptions> {
    rootElement: HTMLElement | null;
    contentElement: HTMLElement | null;
    setProps: SetStoreFunction<NodeViewProps>;
    dispose: () => void;
    constructor(component: Component<NodeViewProps>, props: NodeViewRendererProps, options?: Partial<SolidNodeViewRendererOptions>);
    get dom(): HTMLElement;
    get contentDOM(): HTMLElement | null;
    update(node: Node_2, decorations: DecorationWithType[]): boolean;
    selectNode(): void;
    deselectNode(): void;
    destroy(): void;
}

export declare function SolidNodeViewRenderer(component: Component<NodeViewProps>, options?: Partial<SolidNodeViewRendererOptions>): NodeViewRenderer;

export declare interface SolidNodeViewRendererOptions extends NodeViewRendererOptions {
    update: ((node: Node_2, decorations: Decoration[]) => boolean) | null;
}

export declare class SolidRenderer<P extends object = object> {
    #private;
    id: string;
    editor: Editor;
    element: Element;
    setProps: SetStoreFunction<Record<string, unknown>>;
    constructor(component: Component<P>, { editor, props, as, className }: SolidRendererOptions<P>);
    updateProps(props: Partial<P>): void;
    destroy(): void;
}

export declare interface SolidRendererOptions<P> {
    editor: Editor;
    props?: P;
    as?: string;
    className?: string;
}

export declare function useEditorActive(editor: Accessor<Editor>, name: Accessor<string>, attributes?: Record<string, never>): Accessor<boolean>;

export declare function useEditorAttributes(editor: Accessor<Editor>, nameOrType: Accessor<string | MarkType | NodeType>): Accessor<Record<string, unknown>>;

export { }

<script lang="ts" setup>
import WideDashboard from "@/layouts/WideDashboard.vue";

import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  Code2,
} from "lucide-vue-next";

const editor = useEditor({
  content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
  extensions: [StarterKit],
});
</script>

<template>
  <WideDashboard>
    <section class="px-6 mx-auto max-w-3xl">
      <h1>Free custom branding of Admin Portal in Sandbox</h1>
      <div v-if="editor" class="gap-2 flex -ml-2 mx-auto">
        <button
          @click="editor?.chain().focus().toggleBold().run()"
          :disabled="!editor.can().chain().focus().toggleBold().run()"
          :class="
            editor.isActive('bold')
              ? 'bg-gray-999 text-white'
              : 'hover:bg-gray-200 text-gray-300 hover:text-gray-999'
          "
          class="rounded-md p-2"
        >
          <Bold class="h-4 w-4" />
        </button>
        <button
          @click="editor?.chain().focus().toggleItalic().run()"
          :disabled="!editor.can().chain().focus().toggleItalic().run()"
          :class="
            editor.isActive('italic')
              ? 'bg-gray-999 text-white'
              : 'hover:bg-gray-200 text-gray-300 hover:text-gray-999'
          "
          class="rounded-md p-2"
        >
          <Italic class="h-4 w-4" />
        </button>
        <button
          @click="editor?.chain().focus().toggleStrike().run()"
          :disabled="!editor.can().chain().focus().toggleStrike().run()"
          :class="
            editor.isActive('strike')
              ? 'bg-gray-999 text-white'
              : 'hover:bg-gray-200 text-gray-300 hover:text-gray-999'
          "
          class="rounded-md p-2"
        >
          <Strikethrough class="h-4 w-4" />
        </button>
        <button
          @click="editor?.chain().focus().toggleCode().run()"
          :disabled="!editor.can().chain().focus().toggleCode().run()"
          :class="
            editor.isActive('code')
              ? 'bg-gray-999 text-white'
              : 'hover:bg-gray-200 text-gray-300 hover:text-gray-999'
          "
          class="rounded-md p-2"
        >
          <Code class="h-4 w-4" />
        </button>
        <button
          @click="editor?.chain().focus().toggleHeading({ level: 2 }).run()"
          :class="
            editor.isActive('heading', { level: 2 })
              ? 'bg-gray-999 text-white'
              : 'hover:bg-gray-200 text-gray-300 hover:text-gray-999'
          "
          class="rounded-md p-2"
        >
          <Heading2 class="h-4 w-4" />
        </button>
        <button
          @click="editor?.chain().focus().toggleHeading({ level: 3 }).run()"
          :class="
            editor.isActive('heading', { level: 3 })
              ? 'bg-gray-999 text-white'
              : 'hover:bg-gray-200 text-gray-300 hover:text-gray-999'
          "
          class="rounded-md p-2"
        >
          <Heading3 class="h-4 w-4" />
        </button>
        <button
          @click="editor?.chain().focus().toggleHeading({ level: 4 }).run()"
          :class="
            editor.isActive('heading', { level: 4 })
              ? 'bg-gray-999 text-white'
              : 'hover:bg-gray-200 text-gray-300 hover:text-gray-999'
          "
          class="rounded-md p-2"
        >
          <Heading4 class="h-4 w-4" />
        </button>
        <button
          @click="editor?.chain().focus().toggleHeading({ level: 5 }).run()"
          :class="
            editor.isActive('heading', { level: 5 })
              ? 'bg-gray-999 text-white'
              : 'hover:bg-gray-200 text-gray-300 hover:text-gray-999'
          "
          class="rounded-md p-2"
        >
          <Heading5 class="h-4 w-4" />
        </button>
        <button
          @click="editor?.chain().focus().toggleHeading({ level: 6 }).run()"
          :class="
            editor.isActive('heading', { level: 6 })
              ? 'bg-gray-999 text-white'
              : 'hover:bg-gray-200 text-gray-300 hover:text-gray-999'
          "
          class="rounded-md p-2"
        >
          <Heading6 class="h-4 w-4" />
        </button>
        <button
          @click="editor?.chain().focus().toggleBulletList().run()"
          :class="
            editor.isActive('bulletList')
              ? 'bg-gray-999 text-white'
              : 'hover:bg-gray-200 text-gray-300 hover:text-gray-999'
          "
          class="rounded-md p-2"
        >
          <List class="h-4 w-4" />
        </button>
        <button
          @click="editor?.chain().focus().toggleOrderedList().run()"
          :class="
            editor.isActive('orderedList')
              ? 'bg-gray-999 text-white'
              : 'hover:bg-gray-200 text-gray-300 hover:text-gray-999'
          "
          class="rounded-md p-2"
        >
          <ListOrdered class="h-4 w-4" />
        </button>
        <button
          @click="editor?.chain().focus().toggleCodeBlock().run()"
          :class="
            editor.isActive('codeBlock')
              ? 'bg-gray-999 text-white'
              : 'hover:bg-gray-200 text-gray-300 hover:text-gray-999'
          "
          class="rounded-md p-2"
        >
          <Code2 class="h-4 w-4" />
        </button>
        <button
          @click="editor?.chain().focus().toggleBlockquote().run()"
          :class="
            editor.isActive('blockquote')
              ? 'bg-gray-999 text-white'
              : 'hover:bg-gray-200 text-gray-300 hover:text-gray-999'
          "
          class="rounded-md p-2"
        >
          <Quote class="h-4 w-4" />
        </button>
        <button
          @click="editor?.chain().focus().undo().run()"
          :disabled="!editor.can().chain().focus().undo().run()"
          class="rounded-md p-2 text-gray-300 hover:bg-gray-200 hover:text-gray-999"
        >
          <Undo class="h-4 w-4" />
        </button>
        <button
          @click="editor?.chain().focus().redo().run()"
          :disabled="!editor.can().chain().focus().redo().run()"
          class="rounded-md p-2 text-gray-300 hover:bg-gray-200 hover:text-gray-999"
        >
          <Redo class="h-4 w-4" />
        </button>
      </div>
      <div class="prose max-w-3xl">
        <editor-content :editor="editor" />
      </div>
    </section>
  </WideDashboard>
</template>

<style>
.ProseMirror {
  outline: none;
  min-height: 400px;
}
.ProseMirror > * + * {
  margin-top: 0.75em;
}
</style>

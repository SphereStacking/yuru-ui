<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MNavbar from './MNavbar.vue'
import MButton from '../ui/MButton.vue'
</script>

<template>
  <Story title="Layout/MNavbar">
    <Variant title="hoyo">
      <MProvider theme="hoyo">
        <MNavbar>
          <template #brand>まるUI</template>
          <a href="#" style="color: var(--m-color-gray-700); text-decoration: none;">ホーム</a>
          <a href="#" style="color: var(--m-color-gray-700); text-decoration: none;">コンポーネント</a>
          <a href="#" style="color: var(--m-color-gray-700); text-decoration: none;">テーマ</a>
          <template #actions>
            <MButton size="sm">ログイン</MButton>
          </template>
        </MNavbar>
      </MProvider>
    </Variant>

    <Variant title="pishi">
      <MProvider theme="pishi">
        <MNavbar>
          <template #brand>まるUI</template>
          <a href="#" style="color: var(--m-color-gray-700); text-decoration: none;">ホーム</a>
          <a href="#" style="color: var(--m-color-gray-700); text-decoration: none;">コンポーネント</a>
          <a href="#" style="color: var(--m-color-gray-700); text-decoration: none;">テーマ</a>
          <template #actions>
            <MButton size="sm">ログイン</MButton>
          </template>
        </MNavbar>
      </MProvider>
    </Variant>

    <Variant title="toge">
      <MProvider theme="toge">
        <MNavbar>
          <template #brand>まるUI</template>
          <a href="#" style="color: var(--m-color-gray-700); text-decoration: none;">ホーム</a>
          <a href="#" style="color: var(--m-color-gray-700); text-decoration: none;">コンポーネント</a>
          <a href="#" style="color: var(--m-color-gray-700); text-decoration: none;">テーマ</a>
          <template #actions>
            <MButton size="sm">ログイン</MButton>
          </template>
        </MNavbar>
      </MProvider>
    </Variant>

    <Variant title="moko">
      <MProvider theme="moko">
        <MNavbar>
          <template #brand>まるUI</template>
          <a href="#" style="color: var(--m-color-gray-700); text-decoration: none;">ホーム</a>
          <a href="#" style="color: var(--m-color-gray-700); text-decoration: none;">コンポーネント</a>
          <a href="#" style="color: var(--m-color-gray-700); text-decoration: none;">テーマ</a>
          <template #actions>
            <MButton size="sm">ログイン</MButton>
          </template>
        </MNavbar>
      </MProvider>
    </Variant>

    <Variant title="kira">
      <MProvider theme="kira">
        <MNavbar>
          <template #brand>まるUI</template>
          <a href="#" style="color: var(--m-color-gray-700); text-decoration: none;">ホーム</a>
          <a href="#" style="color: var(--m-color-gray-700); text-decoration: none;">コンポーネント</a>
          <a href="#" style="color: var(--m-color-gray-700); text-decoration: none;">テーマ</a>
          <template #actions>
            <MButton size="sm">ログイン</MButton>
          </template>
        </MNavbar>
      </MProvider>
    </Variant>

    <Variant title="nemu">
      <MProvider theme="nemu">
        <MNavbar>
          <template #brand>まるUI</template>
          <a href="#" style="color: var(--m-color-gray-700); text-decoration: none;">ホーム</a>
          <a href="#" style="color: var(--m-color-gray-700); text-decoration: none;">コンポーネント</a>
          <a href="#" style="color: var(--m-color-gray-700); text-decoration: none;">テーマ</a>
          <template #actions>
            <MButton size="sm">ログイン</MButton>
          </template>
        </MNavbar>
      </MProvider>
    </Variant>
  </Story>
</template>

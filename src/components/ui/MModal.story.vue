<script setup lang="ts">
import { ref } from 'vue'
import MProvider from '../provider/MProvider.vue'
import MButton from './MButton.vue'
import MModal from './MModal.vue'

const hoyoOpen = ref(false)
const pishiOpen = ref(false)
const togeOpen = ref(false)
const mokoOpen = ref(false)
const kiraOpen = ref(false)
const nemuOpen = ref(false)
</script>

<template>
  <Story title="Overlay/MModal">
    <Variant title="hoyo">
      <MProvider theme="hoyo">
        <div style="padding: 24px;">
          <MButton @click="hoyoOpen = true">モーダルを開く</MButton>
          <MModal v-model="hoyoOpen">
            <template #header>ほよほよモーダル</template>
            <p style="color: var(--m-color-gray-600); line-height: 1.8;">
              やわらかい雰囲気のモーダルダイアログです。背景をクリックするか Esc キーで閉じられます。
            </p>
            <template #footer>
              <MButton variant="ghost" @click="hoyoOpen = false">キャンセル</MButton>
              <MButton @click="hoyoOpen = false">OK</MButton>
            </template>
          </MModal>
        </div>
      </MProvider>
    </Variant>

    <Variant title="pishi">
      <MProvider theme="pishi">
        <div style="padding: 24px;">
          <MButton @click="pishiOpen = true">モーダルを開く</MButton>
          <MModal v-model="pishiOpen">
            <template #header>ぴしっとモーダル</template>
            <p style="color: var(--m-color-gray-600); line-height: 1.8;">
              すっきり整ったモーダルダイアログです。背景をクリックするか Esc キーで閉じられます。
            </p>
            <template #footer>
              <MButton variant="ghost" @click="pishiOpen = false">キャンセル</MButton>
              <MButton @click="pishiOpen = false">OK</MButton>
            </template>
          </MModal>
        </div>
      </MProvider>
    </Variant>

    <Variant title="toge">
      <MProvider theme="toge">
        <div style="padding: 24px;">
          <MButton @click="togeOpen = true">モーダルを開く</MButton>
          <MModal v-model="togeOpen">
            <template #header>とげとげモーダル</template>
            <p style="color: var(--m-color-gray-600); line-height: 1.8;">
              角丸ゼロ、シャープなボーダーで硬質な印象のモーダルです。
            </p>
            <template #footer>
              <MButton variant="ghost" @click="togeOpen = false">キャンセル</MButton>
              <MButton @click="togeOpen = false">OK</MButton>
            </template>
          </MModal>
        </div>
      </MProvider>
    </Variant>

    <Variant title="moko">
      <MProvider theme="moko">
        <div style="padding: 24px;">
          <MButton @click="mokoOpen = true">モーダルを開く</MButton>
          <MModal v-model="mokoOpen">
            <template #header>もこもこモーダル</template>
            <p style="color: var(--m-color-gray-600); line-height: 1.8;">
              大きな角丸とバウンスアニメーションで、ぽわっと登場するモーダルです。
            </p>
            <template #footer>
              <MButton variant="ghost" @click="mokoOpen = false">キャンセル</MButton>
              <MButton @click="mokoOpen = false">OK</MButton>
            </template>
          </MModal>
        </div>
      </MProvider>
    </Variant>

    <Variant title="kira">
      <MProvider theme="kira">
        <div style="padding: 24px;">
          <MButton @click="kiraOpen = true">モーダルを開く</MButton>
          <MModal v-model="kiraOpen">
            <template #header>きらきらモーダル</template>
            <p style="color: var(--m-color-gray-600); line-height: 1.8;">
              グラデーションボーダーとグロウシャドウで華やかなモーダルです。
            </p>
            <template #footer>
              <MButton variant="ghost" @click="kiraOpen = false">キャンセル</MButton>
              <MButton @click="kiraOpen = false">OK</MButton>
            </template>
          </MModal>
        </div>
      </MProvider>
    </Variant>

    <Variant title="nemu">
      <MProvider theme="nemu">
        <div style="padding: 24px;">
          <MButton @click="nemuOpen = true">モーダルを開く</MButton>
          <MModal v-model="nemuOpen">
            <template #header>ねむねむモーダル</template>
            <p style="color: var(--m-color-gray-600); line-height: 1.8;">
              薄い背景とゆっくりしたトランジションで、穏やかに表示されるモーダルです。
            </p>
            <template #footer>
              <MButton variant="ghost" @click="nemuOpen = false">キャンセル</MButton>
              <MButton @click="nemuOpen = false">OK</MButton>
            </template>
          </MModal>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>

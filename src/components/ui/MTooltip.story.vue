<script setup lang="ts">
import MProvider from '../provider/MProvider.vue'
import MButton from './MButton.vue'
import MTooltip from './MTooltip.vue'
</script>

<template>
  <Story title="Feedback/MTooltip">
    <Variant title="hoyo">
      <MProvider theme="hoyo">
        <div style="padding: 80px 120px; display: flex; flex-wrap: wrap; gap: 32px; align-items: center;">
          <MTooltip content="上のツールチップ" position="top">
            <MButton>Top</MButton>
          </MTooltip>
          <MTooltip content="下のツールチップ" position="bottom">
            <MButton>Bottom</MButton>
          </MTooltip>
          <MTooltip content="左のツールチップ" position="left">
            <MButton>Left</MButton>
          </MTooltip>
          <MTooltip content="右のツールチップ" position="right">
            <MButton>Right</MButton>
          </MTooltip>
        </div>
      </MProvider>
    </Variant>

    <Variant title="pishi">
      <MProvider theme="pishi">
        <div style="padding: 80px 120px; display: flex; flex-wrap: wrap; gap: 32px; align-items: center;">
          <MTooltip content="上のツールチップ" position="top">
            <MButton>Top</MButton>
          </MTooltip>
          <MTooltip content="下のツールチップ" position="bottom">
            <MButton>Bottom</MButton>
          </MTooltip>
          <MTooltip content="左のツールチップ" position="left">
            <MButton>Left</MButton>
          </MTooltip>
          <MTooltip content="右のツールチップ" position="right">
            <MButton>Right</MButton>
          </MTooltip>
        </div>
      </MProvider>
    </Variant>

    <Variant title="toge">
      <MProvider theme="toge">
        <div style="padding: 80px 120px; display: flex; flex-wrap: wrap; gap: 32px; align-items: center;">
          <MTooltip content="上のツールチップ" position="top">
            <MButton>Top</MButton>
          </MTooltip>
          <MTooltip content="下のツールチップ" position="bottom">
            <MButton>Bottom</MButton>
          </MTooltip>
          <MTooltip content="左のツールチップ" position="left">
            <MButton>Left</MButton>
          </MTooltip>
          <MTooltip content="右のツールチップ" position="right">
            <MButton>Right</MButton>
          </MTooltip>
        </div>
      </MProvider>
    </Variant>

    <Variant title="moko">
      <MProvider theme="moko">
        <div style="padding: 80px 120px; display: flex; flex-wrap: wrap; gap: 32px; align-items: center;">
          <MTooltip content="上のツールチップ" position="top">
            <MButton>Top</MButton>
          </MTooltip>
          <MTooltip content="下のツールチップ" position="bottom">
            <MButton>Bottom</MButton>
          </MTooltip>
          <MTooltip content="左のツールチップ" position="left">
            <MButton>Left</MButton>
          </MTooltip>
          <MTooltip content="右のツールチップ" position="right">
            <MButton>Right</MButton>
          </MTooltip>
        </div>
      </MProvider>
    </Variant>

    <Variant title="kira">
      <MProvider theme="kira">
        <div style="padding: 80px 120px; display: flex; flex-wrap: wrap; gap: 32px; align-items: center;">
          <MTooltip content="上のツールチップ" position="top">
            <MButton>Top</MButton>
          </MTooltip>
          <MTooltip content="下のツールチップ" position="bottom">
            <MButton>Bottom</MButton>
          </MTooltip>
          <MTooltip content="左のツールチップ" position="left">
            <MButton>Left</MButton>
          </MTooltip>
          <MTooltip content="右のツールチップ" position="right">
            <MButton>Right</MButton>
          </MTooltip>
        </div>
      </MProvider>
    </Variant>

    <Variant title="nemu">
      <MProvider theme="nemu">
        <div style="padding: 80px 120px; display: flex; flex-wrap: wrap; gap: 32px; align-items: center;">
          <MTooltip content="上のツールチップ" position="top">
            <MButton>Top</MButton>
          </MTooltip>
          <MTooltip content="下のツールチップ" position="bottom">
            <MButton>Bottom</MButton>
          </MTooltip>
          <MTooltip content="左のツールチップ" position="left">
            <MButton>Left</MButton>
          </MTooltip>
          <MTooltip content="右のツールチップ" position="right">
            <MButton>Right</MButton>
          </MTooltip>
        </div>
      </MProvider>
    </Variant>
  </Story>
</template>

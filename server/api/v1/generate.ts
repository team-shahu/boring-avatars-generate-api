import { initialize, svg2png } from 'svg2png-wasm'
// @ts-ignore
import wasm from 'svg2png-wasm/svg2png_wasm_bg.wasm'

// http://127.0.0.1:3000/api/v1/generate?size=300&variant=beam&seed=hogehoge
export default defineEventHandler(async (event) => {
  try {
    await initialize(await wasm);

    // クエリからsize, variant, seedを取得
    let { size, variant, seed } = getQuery(event);

    // ハンドリング
    if ( !size || typeof size !== 'number' || size < 1 ) size = 100;
    if ( !variant || typeof variant !== 'string' || !['bauhaus', 'beam', 'marble', 'pixel', 'ring', 'sunset'].includes(variant) ) variant = 'beam';
    if ( !seed || typeof seed !== 'string' || seed.length < 1 ) seed = new Date().getTime().toString();
    // console.log(useRuntimeConfig().public.apiBase);

    // {this host}/avatars-{size}/{variant}/{seed}
    const url = `${useRuntimeConfig().public.apiBase}/avatars-${size}/${variant}/${seed}`;
    const response = await fetch(url);
    if (response.status !== 200) return { err: '404 Not Found' };
    // response.bodyからsvgタグのものを取得
    const svg = await response.text().then((text) => {
      const match = text.match(/<svg.*<\/svg>/s);
      if (!match) throw new Error('SVG not found in response');
      return match[0];
    });
    const png = await svg2png(svg, { width: size, height: size });
    await send(event, png, 'image/png');
  } catch (err) {
    // Error handling
    return { err:  (err as Error).message };
  }
})
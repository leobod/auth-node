
class TsDefine {
  underlineToCamel(model_name:string):string {
    const model_names = model_name.split('_');
    let result = ''
    for (const name of model_names) {
      result += name[0].toUpperCase() + name.slice(1)
    }
    return result;
  }

  /**
   * 附加换行符
   * @param val
   */
  defineNewLine(val:string):string {
    return val + '\r\n';
  }

  /**
   * 生成model
   * @param model_name
   * @param content
   */
  defineModel(model_name: string, content: string):string {
    const pre_text = this.defineNewLine(`interface ${model_name} {`);
    const post_text = this.defineNewLine(`{`);
    return pre_text + content + post_text;
  }

}

export {
  TsDefine
}

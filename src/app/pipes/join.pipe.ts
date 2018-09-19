import {Pipe ,PipeTransform} from "@angular/core";

@Pipe({
  name:'join',
  pure: false
})

export class JoinPipe implements PipeTransform{
  transform(array: string[], key: string) {
    let result = array.map(el => {
      console.log(el[key])
      if(!key) {
        return el
      } else  {
        return el[key]
      }
    })
    console.log(result)
 return array.join(',')
  }
}